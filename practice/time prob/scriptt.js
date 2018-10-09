function time(a) {
  if(a>0){
    if (a <= 12)
     console.log("good Morning");
    else
      if (a < 15)
       console.log("good AfterNoon");
      else
        if (a < 19)
         console.log("good Evening");
        else
          if (a <= 24)
           console.log("good Night");
          else
           alert("INvalid Time : altough time is relevent still there are only 24 hr in a day");
  }
  else
  console.log("E = MC^2")

}