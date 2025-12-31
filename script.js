let currentPass = "";
const correctPass = "2025"; // Set your code here

function press(num) {
    if (currentPass.length < 4) {
        currentPass += num;
        document.getElementById("pass-display").innerText = "* ".repeat(currentPass.length);
        
        // Haptic feedback for mobile (Android)
        if (navigator.vibrate) navigator.vibrate(50);
    }
    
    if (currentPass.length === 4) {
        if (currentPass === correctPass) {
            document.getElementById("status").innerText = "Unlocked! 💖";
            setTimeout(() => {
                document.getElementById("login-screen").classList.add("hidden");
                document.getElementById("gift-content").classList.remove("hidden");
                showTab('profile');
            }, 500);
        } else {
            document.getElementById("status").innerText = "Wrong code!";
            setTimeout(clearPass, 500);
        }
    }
}

function clearPass() {
    currentPass = "";
    document.getElementById("pass-display").innerText = "_ _ _ _";
}

function showTab(tabName) {
    const display = document.getElementById("tab-display");
    if (tabName === 'profile') {
        display.innerHTML = <h3>Profile</h3><p>To the most special person...</p>;
    } else if (tabName === 'gallery') {
        display.innerHTML = 
            <h3>Memories</h3>
            <div class="gallery-grid">
                <img src="dia1.jpg" class="gallery-img">
                <img src="dia2.jpg" class="gallery-img">
                <img src="dia3.jpg" class="gallery-img">
                <img src="dia4.jpg" class="gallery-img">
            </div>;
    } else if (tabName === 'letter') {
        display.innerHTML = <h3>Letter</h3><p>Happy Birthday! You mean the world to me...</p>;
    }
}

