// //2.1
// //const product = 'Socks'
const {createApp, ref, computed, reactive, toRefs} = Vue 
const app = createApp({
//     setup(){
//         // const product = ref('Socks')
//         const product = ref('Boots')
//         const brand = ref('SE 331')
//         //2.5
//         const description = ref('Hello this is my Boots Shop')
//         // const image = ref('./assets/images/socks_green.jpg')
//         //3.6
//         const link = ref('https://www.camt.cmu.ac.th/')
//         // const inStock = ref(true) 
//         const inventory = ref(100)
//         //4.9
//         // const onSale = ref(true)
//         const details = ref([
//             '50% cotton',
//             '30% wool',
//             '20% polyester'
//         ])
//         const variants = ref([
//             { id: 2234, color: 'green', image:'./assets/images/socks_green.jpg',quantity: 50 },
//             { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg',quantity: 0 }
//         ])

//         const selectedVariant = ref(0)

//         const sizes = ref('S, M, L')
//         const cart = ref(0)

//         const image = computed(() => {
//             return variants.value[selectedVariant.value].image
//         })
//         const inStock = computed(() => {
//             return variants.value[selectedVariant.value].quantity
//         })
//         //8.5
//         const onSale = computed(() => {
//             if (variants.value[selectedVariant.value].quantity > 0){
//                 return brand.value+' '+product.value+' is on sale'
//             }
//             else{
//                 return brand.value+' '+product.value+' not on sale'
//             }
//         })
        
//         function addToCart() {
//             cart.value +=1
//         }        
//         const title = computed(() => {
//             return brand.value+' '+product.value
//         })
//         function updateImage(variantImage){
//             image.value = variantImage
//         }
//         //6.7
//         function changeStatus(){
//             var element = document.getElementById('image');
//             if(inStock.value == false){
//                 element.style.opacity = "0.4";
//                 element.style.filter  = 'alpha(opacity=40)';
//             }
//             else{
//                 var element = document.getElementById('image');
//                 element.style.opacity = "1";
//                 element.style.filter  = 'alpha(opacity=100)';
//             }
//         }
//         function updateVariant(index){
//             selectedVariant.value = index;
//         }
        
//             return{
//             product,
//             brand,
//             title,
//             description,
//             image,
//             link,
//             inStock,
//             inventory,
//             onSale,
//             details,
//             variants,
//             sizes,
//             cart,
//             addToCart,
//             updateImage,
//             changeStatus,
//             updateVariant
//         }
//     }
// }).mount('#app')
// const app = createApp({
    setup(){
        const cart = ref([])
        const premium = ref(false)
        const details = ref([
            '50% cotton',
            '30% wool',
            '20% polyester'
        ])
        function updateCart(id){
            cart.value.push(id)
        }
        function removeUpdate(id){
            const index = cart.value.findIndex((item=> item === id))
            if(index !== -1){
                cart.value.splice(index,1)
            }
        }
        return{
            cart,
            premium,
            details,
            updateCart,
            removeUpdate
        }
    }
})
app.component('product-display', productDisplay)

app.component('review-form', reviewForm)

app.component('review-list', reviewList)

app.component('product-details', productDetails)

app.mount('#app')