document.addEventListener("DOMContentLoaded",()=>{
    let dailyTarget = document.querySelector('#dailyTarget')
    let enableNotifications = document.querySelector('#enableNotifications')
    let notificationInterval = document.querySelector('#notificationInterval')
    let startTime = document.querySelector('#startTime')
    let endTime = document.querySelector('#endTime')
    let saveSetting = document.querySelector('#saveSetting')
    let resetSetting = document.querySelector('#resetSetting')
    
    if(!dailyTarget || !enableNotifications || !notificationInterval || 
       !startTime || !endTime || !saveSetting || !resetSetting) {
        console.error('Gerekli elementler bulunamadı');
        return;
    }
    
    resetSetting.addEventListener('click',()=>{
        dailyTarget.value = 2000;
        enableNotifications.checked = true;
        notificationInterval.value = 60;
        startTime.value = "08:00";
        endTime.value = "22:00";
        
        const toasterContainer = document.getElementById('toaster-container');
        if(!toasterContainer) {
            console.error('Toaster container bulunamadı');
            return;
        }
        const toastEl = document.createElement('div');
        toastEl.className = 'toast-success';
        toastEl.setAttribute('role', 'alert');
    
        toastEl.innerHTML = `
        <div class="toast-header">
            <strong>Ayarlar Değişti</strong>
            <button type="button" id="closeButtonDefault" class="btn-close" data-bs-dismiss="toast"></button>
        </div>
        <div class="toast-body">
            <h6 style="text-align:left;">Varsayılan ayarlar uygulandı</h6>
        </div>
        `;
        toasterContainer.appendChild(toastEl);
        let closeButton = document.getElementById("closeButtonDefault");
        if(!closeButton){
            console.log("Buton yok")
        }
        else{
            closeButton.addEventListener("click",()=>{
                toastEl.remove();
            })  
        } 
        setTimeout(() => {
            if(toastEl && toastEl.parentNode) {
                toastEl.remove();
            }
        }, 5000);
    });
    saveSetting.addEventListener('click',()=>{
        dailyTarget.value = 2000;
        enableNotifications.checked = true;
        notificationInterval.value = 60;
        startTime.value = "08:00";
        endTime.value = "22:00";
        
        const toasterContainer = document.getElementById('toaster-container');
        if(!toasterContainer) {
            console.error('Toaster container bulunamadı');
            return;
        }
        const toastEl = document.createElement('div');
        toastEl.className = 'toast-warning';
        toastEl.setAttribute('role', 'alert');
    
        toastEl.innerHTML = `
        <div class="toast-header">
            <strong>Ayarlar Değişti</strong>
            <button type="button" id="closeButton" class="btn-close" data-bs-dismiss="toast"></button>
        </div>
        <div class="toast-body">
            <h6 style="text-align:left;">Seçtiğiniz Ayarlar Uygulandı</h6>
        </div>
        `;
        toasterContainer.appendChild(toastEl);

        let closeButton = document.getElementById("closeButton");
        if(!closeButton){
            console.log("Buton yok")
        }
        else{
            closeButton.addEventListener("click",()=>{
                toastEl.remove();
            })  
        } 
        // 7 saniye sonra mesajı kaldır
        setTimeout(() => {
            if(toastEl && toastEl.parentNode) {
                toastEl.remove();
            }
        }, 5000);
    });
})