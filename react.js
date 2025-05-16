function subscribe(plan) {
    alert(`Anda telah memilih paket ${plan}. Terima kasih atas langganan Anda!`);
  }
  
  function contact() {
    alert("Silakan hubungi kami di email academy@coding.com atau melalui WhatsApp.");
  }

      // Toggle details open/close icon rotation
      document.querySelectorAll("details").forEach((detail) => {
        detail.addEventListener("toggle", (e) => {
          if (detail.open) {
            detail.querySelector("summary i").classList.add("rotate-180");
          } else {
            detail.querySelector("summary i").classList.remove("rotate-180");
          }
        });
      });