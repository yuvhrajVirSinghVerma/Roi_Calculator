export function createBtn(n,className,...args){
    for(let i=0;i<n;i++){
         let btn =document.createElement('button')
         btn.innerText=args[i]
         btn.classList.add(className)
         document.body.append(btn)
    }
}
