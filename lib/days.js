function check_time(){
    // select all time classes
    let nodes = document.querySelectorAll('.time');
    for (let node of nodes ) {
      // should get the time using Date(), but for this example a fixed hour always works ;)
      const current_time = 12; 
      // get the time from a data-attribute, don't use an id for this!
      const node_time = parseInt(node.getAttribute('data-time'));
      // add a relevant class, much easier to maintain/update than styling elements inside your JS
      if(current_time === node_time )
        node.classList.add('now');
      else if(current_time > node_time )
        node.classList.add('past');
      else if(current_time < node_time )
        node.classList.add('future');
    }
  }
  
  // use window.setTimeout(...) to check frequently to keep up to date. I just called the function once instead of periodically.
  check_time();

