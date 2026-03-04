import React from 'react';
import { BookOpen, CheckCircle2 } from 'lucide-react';
import { loginGuideSections } from '../content/loginGuideContent';

const LoginGuide: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="text-center space-y-3">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-200 text-sm">
          <BookOpen size={16} />
          آموزش ورود
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white">راهنمای کامل ورود به کلاینت</h2>
        <p className="text-slate-300 max-w-2xl mx-auto">
          این صفحه از فایل محتوایی خوانده می‌شود. برای تغییر متن‌ها فقط فایل
          <span className="text-white font-semibold"> content/loginGuideContent.ts</span>
          {' '}را ویرایش کن.
        </p>
      </div>

      <div className="grid gap-6">
        {loginGuideSections.map((section) => (
          <article key={section.id} className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 sm:p-8 space-y-5">
            <header>
              <h3 className="text-xl sm:text-2xl font-bold text-white">{section.heading}</h3>
              <p className="text-slate-300 mt-2">{section.intro}</p>
            </header>

            <ol className="space-y-4">
              {section.steps.map((step, index) => (
                <li key={step.title} className="rounded-xl border border-white/10 bg-black/20 p-4">
                  <div className="flex items-center gap-2 text-white font-semibold">
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-purple-500/20 text-purple-200 text-sm">
                      {index + 1}
                    </span>
                    {step.title}
                  </div>
                  <p className="text-slate-300 mt-2 leading-7">{step.description}</p>

                  {step.tips && step.tips.length > 0 && (
                    <ul className="mt-3 space-y-2">
                      {step.tips.map((tip) => (
                        <li key={tip} className="flex items-start gap-2 text-sm text-slate-200">
                          <CheckCircle2 size={16} className="mt-0.5 text-emerald-300" />
                          <span>{tip}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ol>
          </article>
        ))}
      </div>
    </div>
  );
};

export default LoginGuide;
