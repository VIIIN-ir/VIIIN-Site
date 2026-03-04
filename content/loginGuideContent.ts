export interface LoginGuideStep {
  title: string;
  description: string;
  tips?: string[];
  imageUrl?: string;
  imageAlt?: string;
}

export interface LoginGuideSection {
  id: string;
  heading: string;
  intro: string;
  steps: LoginGuideStep[];
}

export interface LoginGuidePageContent {
  title: string;
  subtitle: string;
  sections: LoginGuideSection[];
}

export const loginGuideContent: LoginGuidePageContent = {
  title: 'آموزش ورود به کلاینت',
  subtitle:
    'این صفحه از فایل محتوایی خوانده می‌شود. متن‌ها و تصاویر را فقط از فایل content/loginGuideContent.ts تغییر بده.',
  sections: [
    {
      id: 'download-client',
      heading: '۱) نصب و آماده‌سازی کلاینت',
      intro: 'در این بخش مراحل اولیه برای نصب کلاینت و آماده شدن برای ورود را قرار بده.',
      steps: [
        {
          title: 'دانلود نسخه مناسب',
          description: 'لینک دانلود نسخه ویندوز / اندروید / iOS را اینجا وارد کن تا کاربر نسخه درست را دریافت کند.',
          imageUrl: '/viiin-logo.svg',
          imageAlt: 'نمونه تصویر برای دانلود نسخه مناسب',
        },
        {
          title: 'نصب و اجرای اولیه',
          description: 'مراحل نصب به‌صورت قدم‌به‌قدم را در این بخش بنویس (مثلاً Allow Permission، اجرای اولیه و ...).',
        },
      ],
    },
    {
      id: 'client-login',
      heading: '۲) ورود به کلاینت',
      intro: 'این قسمت برای آموزش ورود با لینک اشتراک، QR یا تنظیمات دستی مناسب است.',
      steps: [
        {
          title: 'افزودن کانفیگ',
          description: 'روش ورود کانفیگ را توضیح بده (Paste Link / Scan QR / Import File).',
          tips: ['اگر لینک باز نشد، ابتدا VPN دیگری را خاموش کنید.', 'حتماً اینترنت پایدار (و ترجیحاً Wi-Fi) داشته باشید.'],
        },
        {
          title: 'اتصال و تست',
          description: 'بعد از انتخاب سرور، روی Connect بزند و یک سایت خارجی را برای تست باز کند.',
        },
      ],
    },
    {
      id: 'troubleshooting',
      heading: '۳) رفع مشکل‌های رایج',
      intro: 'خطاهای متداول را اینجا لیست کن تا کاربر سریع‌تر مشکل خود را حل کند.',
      steps: [
        {
          title: 'وصل نشدن به سرور',
          description: 'راهکارهایی مثل تغییر سرور، بروزرسانی کلاینت، یا بررسی تاریخ و ساعت دستگاه را توضیح بده.',
        },
        {
          title: 'کندی سرعت',
          description: 'روش‌هایی مثل تغییر لوکیشن، تعویض پروتکل یا خاموش/روشن کردن کلاینت را قرار بده.',
        },
      ],
    },
  ],
};
