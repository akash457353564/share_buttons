
export const wa_share_btn = document.querySelector('.wa_share')
const fb_share_btn = document.querySelector('.fb_share')
const tw_share_btn = document.querySelector('.tw_share')


export const whatsapp_share = function(){
    const current_url = window.location.href
    const wa_url = `https://wa.me/?text=${encodeURIComponent(current_url)}`
    
    window.open(wa_url, '_blank')
}

const facebook_share = function(){
    const current_url = window.location.href
    const fb_url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(current_url)}`
    
    window.open(fb_url, '_blank')
    
}

const twitter_share = function(){
    const current_url = window.location.href
    const tw_url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(current_url)}`
    
    window.open(tw_url, '_blank')
}



wa_share_btn.addEventListener('click', ()=>{
    whatsapp_share()
})

fb_share_btn.addEventListener('click', ()=>{
    facebook_share()
})

tw_share_btn.addEventListener('click', ()=>{
    twitter_share()
})