// output is 
//2 
//2 
//2
// because var does not have block scope and while intializing using var the variable i is pointing to same memory locations eventhough it's value is changes
// callback functions while waiting at web api takes reference of memory location with it so as javascript wait for none so it will incriment all the value of i and then the call back function goes to call stack with value of i as 2; 