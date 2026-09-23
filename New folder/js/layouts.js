document.addEventListener("DOMContentLoaded", function () {

  const packageName = localStorage.getItem("selectedPackageName");
  const packagePrice = localStorage.getItem("selectedPackagePrice");

  const packageText = document.getElementById("selectedPackageText");
  const layout1 = document.getElementById("layout1Btn");
  const layout2 = document.getElementById("layout2Btn");
  const layout3 = document.getElementById("layout3Btn");

  if (!packageName) {
    packageText.innerText =
      "No package selected. Please return and choose a package first.";
    return;
  }

  packageText.innerText =
    `You selected: ${packageName} (${packagePrice})`;

  function buildWhatsAppLink(layoutName) {
    return `https://wa.me/27635195475?text=Hi CS Nova,%0A%0AI selected:%0APackage: ${packageName}%0ALayout: ${layoutName}%0ABusiness Name:%0AIndustry:%0AWhen can we begin?`;
  }

  layout1.href = buildWhatsAppLink("Corporate & Professional");
  layout2.href = buildWhatsAppLink("Service & Trades");
  layout3.href = buildWhatsAppLink("Personal Brand & Portfolio");

});