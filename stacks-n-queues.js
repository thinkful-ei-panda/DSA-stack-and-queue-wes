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
const simpleParensTest = '(([{[]]))';

// matchParenthesis(parensTestString);
try{
  console.log(matchParenthesis(simpleParensTest));
} catch(e){
  console.log(e.message);
}

