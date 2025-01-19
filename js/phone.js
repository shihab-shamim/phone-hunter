let currectIndex=12
let startIndex=0

const loadData= async(search='iphone')=>{
    const  res=await fetch(`https://openapi.programming-hero.com/api/phones?search=${search}`)
    const data= await res.json()
  const phones=data.data
  displayPhones(phones)
}

const displayPhones=phones=>{
    const phoneContainer=document.getElementById('phone-container')
    const button=document.getElementById('show-all')
    if(phones.length>12){
        button.classList.remove('hidden')
    }
    else{
        button.classList.add('hidden')
    }
    
    phoneContainer.innerHTML='' 
    
    const phoneses=phones.slice(startIndex,currectIndex)
   

    phoneses.forEach(phone=>{
        const phoneElement=document.createElement('div')
        phoneElement.classList=('w-full  overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800')
        phoneElement.innerHTML=`
        <div class="p-8"> 
         <img class="object-cover object-center mx-auto bg-[#d6dde7] h-56 p-12" src="${phone?.image}" alt="avatar">
       </div>        
                    
                    <div class="px-6 py-4">
                        <h1 class="text-xl font-bold text-black dark:text-white text-center">${phone?.phone_name}</h1>
                
                        
                <div class="flex justify-center mt-12 mb-12">
                <button onclick="handleClick()" class="btn btn-active btn-primary bg-[#0D6EFD]"> Buy Now</button>
                
                </div>
                      
                
                       
                    </div>
                `   
                phoneContainer.appendChild(phoneElement)
                loadingSpinner(false)
            })

    
}

function handleSearch() {
    loadingSpinner(true)
    const search=document.getElementById("search-filed").value
    console.log(search);
    
    loadData(search)


}

const loadingSpinner=(isLoading)=>{
    const loading=document.getElementById('loading-spinner')
    if(isLoading){
        loading.classList.remove('hidden')
    }
    else{
        loading.classList.add('hidden')
    }

}
const handleShow=()=>{
    loadingSpinner(true)
    startIndex+=currectIndex
    currectIndex+=12
    
    const search=document.getElementById("search-filed").value
    
    loadData(search)

}

loadData()

