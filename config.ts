

export const config = {
  // اطلاعات سرور
  serverName: "VIIIN",
  
  // لینک‌های کلاینت‌های تحت وب (Web Clients)
  webClients: [
    {
      name: "Element Web",
      description: "کلاینت اصلی و پیشرفته ماتریکس با تمامی امکانات",
      url: (import.meta as any).env?.VITE_WEB_CLIENT_ELEMENT || "https://app.element.io",
      color: "from-green-500 to-green-700",
      recommended: true
    },
    {
      name: "Cinny",
      description: "رابط کاربری مدرن، ساده و مشابه دیسکورد",
      url: (import.meta as any).env?.VITE_WEB_CLIENT_CINNY || "https://app.cinny.in",
      color: "from-blue-500 to-blue-700",
      recommended: false
    },
    {
      name: "Hydrogen",
      description: "بسیار سبک و سریع، مناسب اینترنت ضعیف",
      url: (import.meta as any).env?.VITE_WEB_CLIENT_HYDROGEN || "https://hydrogen.element.io",
      color: "from-purple-500 to-purple-700",
      recommended: false
    }
  ],

  // لینک‌های دانلود اپلیکیشن‌ها
  downloads: {
    element: {
      android: "https://play.google.com/store/apps/details?id=im.vector.app",
      ios: "https://apps.apple.com/app/vector/id1083446067",
      desktop: "https://element.io/download",
      version: "1.11.0"
    },
    schildichat: {
      android: "https://play.google.com/store/apps/details?id=de.spiritcroc.riotx",
      desktop: "https://schildi.chat/android/", // Generic link
      version: "1.0.0"
    },
    fluffychat: {
      android: "https://play.google.com/store/apps/details?id=chat.fluffy.fluffychat",
      ios: "https://apps.apple.com/app/fluffychat/id1551469600",
      version: "1.12.0"
    }
  },
  
  // اطلاعات تماس و پشتیبانی
  support: {
    email: "support@viiin.chat",
    matrixId: "#viiin:viiin.ir"
  },
  
  // متن شرایط استفاده
  terms: [
    {
      title: "۱. حریم خصوصی و امنیت",
      content: "ما متعهد به حفظ حریم خصوصی شما هستیم. در سرور VIIIN، پیام‌های شما با استفاده از پروتکل‌های رمزنگاری پیشرفته ماتریکس محافظت می‌شوند."
    },
    {
      title: "۲. قوانین محتوا",
      content: "کاربران موظف هستند از انتشار محتوای غیرقانونی، خشونت‌آمیز، یا محتوایی که ناقض حقوق دیگران باشد، خودداری کنند."
    },
    {
      title: "۳. مسئولیت کاربر",
      content: "حفاظت از کلیدهای بازیابی (Recovery Keys) و رمز عبور بر عهده کاربر است. ما امکان بازگردانی پیام‌های رمزنگاری شده را نداریم."
    },
    {
      title: "۴. پایداری سرویس",
      content: "تلاش ما بر ارائه سرویس پایدار است، اما ممکن است برای به‌روزرسانی‌های ضروری قطعی‌های کوتاه مدت داشته باشیم."
    }
  ]
};
