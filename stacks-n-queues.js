class _Node {
  constructor(value,next){
    this.value = value;
    this.next = next;
  }
}

class Stack {
  constructor(){
    this.top = null;
  }

  push(item){
    if(this.top === null){
      this.top = new _Node(item,null);
      return this.top;
    }

    const node = new _Node(item, this.top);
    this.top = node;
  }

  pop(){
    const node = this.top;
    this.top = node.next;
    return node.value;
  }
}

function peek(stack){
  return stack.top;
}

function isEmpty(stack){
  if(stack.top === null){
    return true;
  }
  return false;
}

function display(stack,node=stack.top){
  if(node === null){
    return;
  }

  console.log(node.value);
  display(stack, node.next);
}

function valueOf(stack,node=stack.top){
  if(node === null){
    return '';
  }  
  return node.value + valueOf(stack, node.next);
}


//1 and 2
function problemOneAndTwo() {
  let starTrek = new Stack;

  starTrek.push('Kirk');
  starTrek.push('Spock');
  starTrek.push('McCoy');
  starTrek.push('Scotty');

  console.log(peek(starTrek));

  display(starTrek);

  console.log('----------------');

  starTrek.pop();
  starTrek.pop();

  display(starTrek);
}

//3.

function is_palindrome(s) {
  s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');

  let stringStack = new Stack;

  for(let i = 0; i<s.length; i++){
    stringStack.push(s[i]);
  }

  const reveresedString = valueOf(stringStack);

  return (reveresedString === s)
    ?true
    :false;
}

// True, true, true, false
// console.log(is_palindrome('dad'));
// console.log(is_palindrome('A man, a plan, a canal: Panama'));
// console.log(is_palindrome('1001'));
// console.log(is_palindrome('Tauhida'));

// problemOneAndTwo();

//4.
function matchParenthesis(e){
  e.toString();
  let parensStack = new Stack;

  for(let i = e.length-1; i>=0; i--){
    if(e[i] === '(' || e[i] === ')' || e[i] === '{' || e[i] === '}' || e[i] === '[' || e[i] === ']'){
      parensStack.push(e[i]);
    }      
  }

  let tempStack = new Stack;

  while(parensStack.top){
    if(parensStack.top.value === ')'){
      if(tempStack.top.value === '('){
        parensStack.pop();
        tempStack.pop();
      } else {
        switch(tempStack.top.value){
        case '(':
          throw new Error('unclosed parens');
        case '{':
          throw new Error('unclosed curly brace');
        case '[':
          throw new Error('unclosed square brace');
        default:
          throw new Error('extra closing parens');
        }        
      }
    } 
    else if(parensStack.top.value === '}'){
      if(tempStack.top.value === '{'){
        parensStack.pop();
        tempStack.pop();
      } else {
        switch(tempStack.top.value){
        case '(':
          throw new Error('unclosed parens');
        case '{':
          throw new Error('unclosed curly brace');
        case '[':
          throw new Error('unclosed square brace');
        default:
          throw new Error('extra closing curly brace');
        }       
      }
    } else if(parensStack.top.value === ']'){
      if(tempStack.top.value === '['){
        parensStack.pop();
        tempStack.pop();
      } else {
        switch(tempStack.top.value){
        case '(':
          throw new Error('unclosed parens');
        case '{':
          throw new Error('unclosed curly brace');
        case '[':
          throw new Error('unclosed square brace');
        default:
          throw new Error('extra closing square brace');
        }    
      }
    } else {
      tempStack.push(parensStack.pop());
    }
  }

  if(tempStack.top){
    switch(tempStack.top.value){
    case '(':
      throw new Error('unclosed parens');
    case '{':
      throw new Error('unclosed curly brace');
    case '[':
      throw new Error('unclosed square brace');
    }
  }

  return true;
}

// const parensTestString = 'for(let i = e.length-1; i>=0; i--){if(e[i] === \'(\' || e[i] === \')\'){    parensStack.push(e[i]);  }      }';
// const simpleParensTest = '(([ { [] ]))';

// matchParenthesis(parensTestString);
// try{
//   console.log(matchParenthesis(simpleParensTest));
// } catch(e){
//   console.log(e.message);
// }

//5.
//demoed in class

//6.
class Queue {
  constructor(){
    this.first = null;
    this.last = null;
  }

  enqueue(data){
    const node = new _Node(data,null);
    if(this.first === null){
      this.first = node;
    }

    if(this.last){
      this.last.next = node;
    }

    this.last = node;

  }

  dequeue(){
    if(this.first === null){
      return;
    }
    const node = this.first;
    this.first = this.first.next;
    if(node === this.last){
      this.last = null;
    }
    return node.value;
  }
}

function peek(queue){
  if(queue.first){
    return queue.first.value
  }
  else return 'empty queue'
}

function isEmpty(queue){
  if(queue.first){
    return false
  }
  return true
}

function display(queue){
  if(queue.first === null){
    console.log('empty queue')
    return;
  }

  let node = queue.first
  while(node !== queue.last){
    console.log(node.value)
    node=node.next
  }
  console.log(node.value)
}

function problemSix(){
  let starTrekQ = new Queue;

  starTrekQ.enqueue('Kirk');
  starTrekQ.enqueue('Spock');
  starTrekQ.enqueue('Uhura');
  starTrekQ.enqueue('Sulu');
  starTrekQ.enqueue('Checkov');

  display(starTrekQ)
  console.log('-------------')

  starTrekQ.dequeue()
  starTrekQ.dequeue()

  display(starTrekQ)
  console.log('-------------')
}

problemSix()



