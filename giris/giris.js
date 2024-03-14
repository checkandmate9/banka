
//*
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Formun varsayılan gönderimini engelle
  
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
  
    // Basit bir doğrulama (örneğin, kullanıcı adı "admin" ve parola "12345" ise geçerli)
    if (username === "admin" && password === "12345") {
      alert("Giriş başarılı!");
      window.location.href = "anasayfa.html"; // Başarılı girişte yönlendirme yap
    } else {
      alert("Geçersiz kullanıcı adı veya parola!");
    }
  });
  