import { Award, CheckCircle, Headphones } from 'lucide-react';

export default function BriefInfo() {
  const stats = [
    {
      icon: Award,
      title: '2years, 6months',
      subtitle: 'Experience',
    },
    {
      icon: CheckCircle,
      title: '10+ Projects',
      subtitle: 'Completed',
    },
    {
      icon: Headphones,
      title: 'Support',
      subtitle: 'Online 24/7',
    },
  ];

  return (
    <section className="bg-background py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto bg-background-card border-2 border-background rounded-2xl shadow-xl p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="flex items-center gap-4">
                  <Icon className="text-primary-accent" size={32} />
                  <div>
                    <h4 className="text-primary-accent font-semibold text-sm">
                      {stat.title}
                    </h4>
                    <p className="text-white text-xs">{stat.subtitle}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
