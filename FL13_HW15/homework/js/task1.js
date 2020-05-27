// TODO: Your code goes here
function assign(target, ...sources) {
    sources.forEach(source => {
      Object.defineProperties(target, Object.keys(source).reduce((descriptors, key) => {
          if(target.hasOwnProperty(key) === false){
        descriptors[key] = Object.getOwnPropertyDescriptor(source, key);
          }
        return descriptors;
      }, {}));
    });
    return target;
  }

const paymentCard = {cash:'100$'};
const creditCard = {creditLimit : '50$', cash: '200$'};

const universalCard = assign({},paymentCard,creditCard);

console.log(universalCard);
