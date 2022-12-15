console.clear();

const cap = 10;
const on = 5;
const wait = 5;

function enough(cap, on, wait) {
    if (cap >= on + wait) {
        return 0
    }
    if (cap < on + wait) {
        return wait + on - cap
    }
  }
  console.log(enough);