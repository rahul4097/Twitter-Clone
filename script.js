// only for left div see more plush icon

var more=document.querySelector('.see-more')
var see_popup=document.querySelector('.see-more-popup')

function see_more_popup(){
    more.addEventListener('click',()=>{
        see_popup.classList.add('show');
        if(see_popup.style.display!='none'){
            see_popup.addEventListener('click',()=>{
                see_popup.style.display='none'
                see_popup.classList.remove('show');
            })
        }else{
            see_popup.style.display='block'
            see_more_popup()
        }
    })
}
see_more_popup()




// this code for the account profile.
var show1=document.querySelector('.show_profile');
var profile=document.querySelector('.popup-profile');
var add_account=document.querySelector('.add-account')
var login=document.querySelector('.login')
function profile_open (){
    show1.addEventListener('click',()=>{         // add event listener on three dot(show_profile)
        profile.classList.add('open_profile');  // this line help to add the open_profile class on popup_profile class
                                               
        if(profile.style.display!='none'){    // this will only run when three dot popup is closed
            add_account.addEventListener('click',()=>{  // this click event is applied on popup window
            profile.style.display='none';         // after click on the popup window we assign the popup window nonw means we closed the window
            login.classList.add('login_box')    // this line help to add the login_box class on login class
            login.style.display='block';        // here we assing the login window into block. because when we repeate the function this line help to execute the if condition and open the login window
                                                
            if(login.style.display!='none'){    // this if condition will only execute when the login window is open
                document.querySelector('.cancel').addEventListener('click',()=>{  // this click event applied in the login window -> cross icon to close the login window
                    login.style.display='none'; // this help to close the login window
                    login.classList.remove('login_box') // when we closed the login window this line help to remove this class so beacuse all css part will removed
                });             
            }                        
            profile.classList.remove('open_profile'); // after the login window closed we also remove the open_profile class means the three dot popup window
           })  
        }else{ // this else part only run when we successfully open and closed both the popup and login window so when we again click on three dot then the else part will run
            profile.style.display='block'; // it helps to change the popup display none to visible(block) so that the upper first if condition will execute
            profile_open(); // this is recurrsion we use beacuse when we click the three dot this helps to run the function again. 
        }
    })
}
profile_open();


//this lower code for only the middel-div account photo details
//for firts tweet
var akshay= document.querySelector('#akki');
var account_details= document.querySelector('.account_name');
var account_follow= document.querySelector('#account-follow')
function account_name(){
    akshay.addEventListener('mouseover',()=>{
        account_details.classList.add('box');

        account_follow.addEventListener('click',()=>{
            if(account_follow.innerHTML!='following'){
                account_follow.innerHTML='following'
            }else{
                account_follow.innerHTML='follow'
            }
        })

        if(account_details.style.display!='none'){
            account_details.addEventListener('mouseleave',()=>{
                account_details.style.display='none';
                account_details.classList.remove('box');
            })
        } else{
            account_details.style.display='block';
            account_name();
        }
    })
}
account_name();

//for second tweet

var elvish= document.querySelector('#elvish');
var account_details_e= document.querySelector('.account_name-e');
var account_follow_e= document.querySelector('#account-follow-e')
function elvish_name(){
    elvish.addEventListener('mouseover',()=>{
        account_details_e.classList.add('box2');
                                console.log('first')

        account_follow_e.addEventListener('click',()=>{
                                console.log('follow event ke inside')
            if(account_follow_e.innerHTML!='following'){
                account_follow_e.innerHTML='following'
                                    console.log('follow if ke inside')
            }else{
                account_follow_e.innerHTML='follow'
                                    console.log('follow else ke inside')
            }
        })

        if(account_details_e.style.display!='none'){
                                console.log('account if ke inside')
            account_details_e.addEventListener('mouseleave',()=>{
                account_details_e.style.display='none';
                                    console.log('account event ke inside')
                account_details_e.classList.remove('box2');
            })
        } else{
                                console.log('account else ke inside')
            account_details_e.style.display='block';
       elvish_name();
        }
    })
}
elvish_name();

//this code for tweet three dot icon

var dot=document.querySelector('.tweet-dot')
var account_dot=document.querySelector('.account3-dot');
// var body=document.querySelector('.body');
function account_3dot(){
    dot.addEventListener('click', ()=>{
        account_dot.classList.add('open');

        if(account_dot.style.display!='none'){
            console.log('if')
            account_dot.addEventListener('click',()=>{
                console.log('run')
                account_dot.style.display='none';
                account_dot.classList.remove('open');
            })
        } else{
            account_dot.style.display='block';
            account_3dot();
        }
    })
}
account_3dot();

//this lower code for only right div subscribe button

var subscribe=document.querySelector('#subscribe-me');
var subscribe_c=document.querySelector('.subscribe-c');
var cancel_icon=document.querySelector('.cancel-me')
function subscribe_me(){
    subscribe.addEventListener('click',()=>{
        subscribe_c.classList.add('subscribe-tab');
        if(subscribe_c.style.display!='none'){
            cancel_icon.addEventListener('click',()=>{
                subscribe_c.style.display='none';
                subscribe_c.classList.remove('subscribe-tab');

            })
        } else{
            subscribe_c.style.display='block';
            subscribe_me();
        }
    })
}
subscribe_me()



// The lower code for the Trending section only
var show2=document.querySelectorAll('.show');
var popup=document.querySelector('.popup');
popup.addEventListener('click',()=>{
    // inner.style.display='none'; 
    var hide = document.querySelectorAll('.trending-content')[0];
            console.log(hide)
                hide.remove();
        popup.classList.remove('open');  
   })  
// var inner=document.querySelector('#first');
show2.forEach((display)=>{

    function popup_open (){
        display.addEventListener('click',()=>{
            popup.classList.add('open');  

            if(popup.style.display=='none'){
            
            // }else{
                popup.style.display='block';
                popup_open(); 
            }
        })
    }
    
popup_open();
})




// This lower code for only the follow div.
var button=document.querySelectorAll('.follow_me');
var follow_popup=document.querySelector('.right-follow')
var unfollow=document.querySelector('#unfollow');
var cancel= document.querySelector('#cancel')
button.forEach((follow_me)=>{
    follow_me.addEventListener('click',()=>{
        if(follow_me.innerHTML!='Following'){
            follow_me.innerHTML='Following'
            follow_me.classList.add('deco')
            follow_popup.style.display='grid';
        }else{
            follow_popup.classList.add('try-unfollow')
            if(follow_popup.style.display!='none'){
                unfollow.addEventListener('click',()=>{
                    follow_me.innerHTML='Follow'
                    follow_popup.style.display='none';
                    follow_popup.classList.remove('try-unfollow')   
                    follow_me.classList.remove('deco')
                });
                if(cancel.addEventListener('click',()=>{
                    follow_me.innerHTML='Following'
                    follow_popup.classList.remove('try-unfollow')
                }));                   
            }
        }
    })
})
