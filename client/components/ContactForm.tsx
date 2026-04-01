'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactFormSchema, ContactFormValues } from '@/lib/validation';
import { contactAPI } from '@/lib/api';
import { Loader2 } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function ContactForm() {
  const { t } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      await contactAPI.submit(data);
      setSubmitStatus({
        type: 'success',
        message: t('contact.success'),
      });
      reset();
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: t('contact.error'),
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-white mb-2 font-medium">
            {t('contact.name')} *
          </label>
          <input
            {...register('name')}
            type="text"
            id="name"
            className="w-full px-4 py-3 bg-background-card border border-gray-700 rounded-lg text-white focus:outline-none focus:border-primary-accent transition-colors"
            placeholder="John Doe"
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-white mb-2 font-medium">
            {t('contact.email')} *
          </label>
          <input
            {...register('email')}
            type="email"
            id="email"
            className="w-full px-4 py-3 bg-background-card border border-gray-700 rounded-lg text-white focus:outline-none focus:border-primary-accent transition-colors"
            placeholder="john@example.com"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="phone" className="block text-white mb-2 font-medium">
            Phone Number
          </label>
          <input
            {...register('phone')}
            type="tel"
            id="phone"
            className="w-full px-4 py-3 bg-background-card border border-gray-700 rounded-lg text-white focus:outline-none focus:border-primary-accent transition-colors"
            placeholder="+1 234 567 8900"
          />
        </div>

        <div>
          <label htmlFor="company" className="block text-white mb-2 font-medium">
            Company/Organization
          </label>
          <input
            {...register('company')}
            type="text"
            id="company"
            className="w-full px-4 py-3 bg-background-card border border-gray-700 rounded-lg text-white focus:outline-none focus:border-primary-accent transition-colors"
            placeholder="Your Company"
          />
        </div>

        <div>
          <label htmlFor="projectType" className="block text-white mb-2 font-medium">
            Project Type *
          </label>
          <select
            {...register('projectType')}
            id="projectType"
            className="w-full px-4 py-3 bg-background-card border border-gray-700 rounded-lg text-white focus:outline-none focus:border-primary-accent transition-colors"
          >
            <option value="">Select a project type</option>
            <option value="Web Development">{t('services.webDev.title')}</option>
            <option value="Mobile App Development">{t('services.mobileDev.title')}</option>
            <option value="Electrical Services">{t('services.electrical.title')}</option>
            <option value="UI/UX Design">{t('services.uiux.title')}</option>
            <option value="Other">Other</option>
          </select>
          {errors.projectType && (
            <p className="text-red-500 text-sm mt-1">{errors.projectType.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="budget" className="block text-white mb-2 font-medium">
            Budget Range *
          </label>
          <select
            {...register('budget')}
            id="budget"
            className="w-full px-4 py-3 bg-background-card border border-gray-700 rounded-lg text-white focus:outline-none focus:border-primary-accent transition-colors"
          >
            <option value="">Select budget range</option>
            <option value="<$500">Less than $500</option>
            <option value="$500-$1000">$500 - $1,000</option>
            <option value="$1000-$2500">$1,000 - $2,500</option>
            <option value="$2500+">$2,500+</option>
            <option value="Not Sure">Not Sure</option>
          </select>
          {errors.budget && (
            <p className="text-red-500 text-sm mt-1">{errors.budget.message}</p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-white mb-2 font-medium">
          {t('contact.message')} *
        </label>
        <textarea
          {...register('message')}
          id="message"
          rows={6}
          className="w-full px-4 py-3 bg-background-card border border-gray-700 rounded-lg text-white focus:outline-none focus:border-primary-accent transition-colors resize-none"
          placeholder={t('contact.messagePlaceholder')}
        />
        {errors.message && (
          <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
        )}
      </div>

      {submitStatus.type && (
        <div
          className={`p-4 rounded-lg ${
            submitStatus.type === 'success'
              ? 'bg-green-500/20 border border-green-500 text-green-500'
              : 'bg-red-500/20 border border-red-500 text-red-500'
          }`}
        >
          {submitStatus.message}
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-primary-accent text-background px-8 py-4 rounded-full text-lg font-bold uppercase hover:bg-background hover:text-primary-accent border-2 border-primary-accent transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="animate-spin" size={20} />
            {t('contact.sending')}
          </>
        ) : (
          t('contact.send')
        )}
      </button>
    </form>
  );
}
