#include <iostream>
#include <vector>
#include <deque>
#include <map>

//test str

//std::string json_str = "{key_1:  value_1 ,key_2:{key_2_1:{key_2_1_1 :value_2_1_1 ,key_2_1_2 : value_2_1_2} , key_2_2:value_2_2},key_3:[value_3_1 , value_3_2]}";

//std::string json_str = "{key_1:value_1, key_2:value_2, key_3:value_3}";

//std::string json_str = "{'key_1':'value_1', 'key_2':['value_2_1', 'value_2_2 ',  'value_2_3  n'] ,"
//					 "'key_3':'value_3','key_4':['value_4_1', 'value_4_2',  'value_4_3 ' ], 'key_5': 'value_5'}";

//std::string json_str = "{'key_1':'value_1', 'key_2':['value_2_1', 'value_2_2 ',  'value_2_3  n'] }";

//std::string json_str = "{'key_1':'value_1  U ','key_2':{'key_2_1':{'key_2_1_1' :'val211', 'key_2-2-2':'val222'} , 'key_2_2':'value_2_2'},'key_3':['value_3_1','value_3_2 X','value_3_3 Z']}";					 

//std::string json_str = "{ 'k1':'v1', 'k2':{ 'k21':'v21', 'k22':{'k221':{'k_221*11':'v_221*12'},'k222':{'k222*1':'v222*1'}} , 'k23':'v23' },'k3':'v3'}";

//std::string json_str = "{ 'k1':'v1', 'k2':{ 'k21':'v21', 'k22':['v22','v23','v24'] , 'k23':'v23' },'k3':'v4'}";
std::string json_str = "{ 'k1':'v1', 'k2':{ 'k21':'v21', "
"'k22':{'k221':{'k_221*11':'v_221*12'},'k222':{'k222*1':'v222*1'}} , 'k23':['v23','v24']},'k3':'v4','KX':{'k21':'v21', 'k22':'v22'}}";

//std::string json_str = "{ 'k1':'v1', 'k2':{ 'k21':'v21', 'k22':'v22' , 'k23':{'k221':{'k_221*11':'v_221*12'}}},'k77':'v77'}";


class Node{

	public:
   		
   		std::string key;

   		std::vector <std::string> value;

   		std::vector <Node*> node_ptr;

   		Node * parrent = nullptr;

   	public:
   		
   		Node(std::string key){

   			this->key = key;
   		}

   	friend std::ostream& operator<<(std::ostream & stream, Node node);

   	

};

std::ostream& operator<<(std::ostream & stream, Node node){

   		stream<<"key: "<<node.key<<"\n";
  // 		stream<<"child count: "<<node.node_ptr.size()<<"\n";
   		for(std::string &str: node.value)
   			stream<<"value: "<<str<<"\n";
 //  		if(node.parrent != nullptr)
//   			stream<<"parrent: "<<node.parrent->key<<std::endl;

   	
    /*    
        std::cout<<"_______tree_________\n";
   		
   		for(Node * n: node.node_ptr){
   			std::cout<<"key: "<<n->key <<"\n";
   			for(std::string &item: n->value)
   				stream<<"value : "<<item<<"\n";
   		}
   		
   		std::cout<<"____________________\n";
	*/
   		return stream;
   	}	



class Person_js{

	private:

		std::deque<Node> nods_person;

		std::map<std::string, std::vector<std::string>> keys_map;


	public:
		
		Person_js(std::deque<Node> nods): nods_person(nods){

			for(std::deque<Node>::iterator it_begin = nods.begin();
				it_begin != nods.cend(); ++it_begin){
					create_keys_map(*it_begin);
			}
		}

		void show_all_person_key(){

			for(auto & keys: keys_map){
				std::cout<<keys.first<<" / "<<std::endl;
				for(auto & val: keys.second)
					std::cout<<val<<" |";
			}
			std::cout<<std::endl;
		}	


	private:

		void create_keys_map(Node & node){

				if(node.node_ptr.size() == 0)
					keys_map[node.key] = node.value;
				else{
					for(auto node : node.node_ptr)
					keys_map[node->key].push_back(create_tree_value(*node));
				

			}
		}

		std::string create_tree_value(Node & node){
			std::string key_value =" key: "+node.key;	
			if(node.node_ptr.size() == 0){
				std::string key_value ="values: "; 
				for(auto &item : node.value)
					key_value+=item+" ";

			
			return key_value;
			}
			else{

				for(auto item : node.node_ptr)
					key_value += create_tree_value(*item);
			}

			return key_value;

		}



};










void object_to_json();

std::deque <Node> queue;
std::vector <Node*> link_stack;

int main() {

	bool is_start = true;

	bool is_word = false;

	std::string str;
	for(char ch: json_str){
		
		if(ch =='\''){
			is_word = is_word ? false : true;
			continue;
		}

		if(is_word){	
			str.push_back(ch);
			continue;
		}

		if( (ch ==',' || ch == ']') && str.size()!=0 ) { //!!
			std::prev(queue.end())->value.push_back(move(str));
			continue;
			}
			
		if(ch ==':'){

			Node node(move(str));
				
			queue.push_back(node);
				
			is_start = false;

				if (link_stack.size()!=0){
				    
					Node *child_ptr = & (*std::prev(std::end(queue)));
					(*link_stack.back()).node_ptr.push_back(child_ptr);
					child_ptr->parrent = link_stack.back();
					
				//	std::cout<<"FIRST: "<<link_stack.back()->key<<" SECOND: "<<
				//		link_stack.back()->node_ptr.back()->key<<"\n";
					}
			continue;
			}
			
		if(ch == '{' && !is_start){
				
			link_stack.push_back(&queue.back());
			continue;	
				
			}
		
		if(ch == '}' && link_stack.size()!=0)
				link_stack.pop_back();
			
				
		}
		
	if(str.size() != 0)
		std::prev(queue.end())->value.push_back(move(str));

	for(auto &item : queue)
		std::cout<<item;

	std::cout<<"_____________________________________________\n";
	std::cout<<"_____________________________________________\n";
		
//	object_to_json();	


	Person_js pers(queue);
	pers.show_all_person_key();

}




void object_to_json(){

	std::vector<Node *> scope_stack;

	std::string jsone_encode = "";

	std::deque<Node>::iterator iter_node = queue.begin();

	for(;iter_node != queue.end();++iter_node){

		

			
			



			jsone_encode.push_back('\'');
			jsone_encode+=(iter_node->key);
			jsone_encode+=("\':");


			if(iter_node->node_ptr.size()!=0){
				
				scope_stack.push_back(&(*iter_node));
				
				jsone_encode.push_back('{');

				continue;

			}


			if(iter_node->value.size() == 1){
				
				jsone_encode.push_back('\'');
				jsone_encode+=(iter_node->value[0]);
				jsone_encode+=("\',");

			}
			if(iter_node->value.size() > 1){
				jsone_encode.push_back('[');
				for(auto &item: iter_node->value){
					jsone_encode.push_back('\'');
					jsone_encode+=(item);
					jsone_encode.push_back('\'');
					jsone_encode.push_back(',');

				}
				jsone_encode.back() =']';
				jsone_encode.push_back(',');

			}

		//	if(iter_node->parrent != nullptr)
				if(((iter_node+1) != queue.end()) && (scope_stack.size() != 0) )
					if(iter_node->parrent != (iter_node+1)->parrent)
					{
						scope_stack.pop_back();
						jsone_encode.back()='}';
					//	jsone_encode.push_back('}');
						while(scope_stack.size()!=0  && scope_stack.back() != (iter_node+1)->parrent){
							scope_stack.pop_back();
							jsone_encode.push_back('}');

						}

						jsone_encode.push_back(',');

					}





	}
	
		
	jsone_encode.back()='}';	
	while(scope_stack.size() != 0){
		scope_stack.pop_back();
		jsone_encode.push_back('}');
	}
		

	std::cout<<jsone_encode<<std::endl;
				

}