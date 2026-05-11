import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Check } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { saveWord } from '@/lib/storage';
import { toast } from 'sonner';
import { useLocale } from '@/lib/LocaleContext';
import { useLearningLanguage } from '@/lib/LearningLanguageContext';
import StudyLanguageHeader from '@/components/StudyLanguageHeader';

export default function AddWord() {
  const { t } = useLocale();
  const { studyLanguage, addExamples } = useLearningLanguage();
  const [lithuanian, setLithuanian] = useState('');
  const [english, setEnglish] = useState('');
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    if (!lithuanian.trim() || !english.trim()) return;
    saveWord(lithuanian, english, studyLanguage);
    setSaved(true);
    toast.success(t('wordAddedToast'));
    setTimeout(() => {
      setLithuanian('');
      setEnglish('');
      setSaved(false);
    }, 600);
  };

  const canSave = lithuanian.trim().length > 0 && english.trim().length > 0;

  return (
    <div className="min-h-screen bg-background px-6 pb-10 pt-6 flex flex-col max-w-lg mx-auto">
      <StudyLanguageHeader className="mb-5" />

      {/* Header */}
      <div className="flex items-center gap-3 mb-10">
        <Link
          to="/"
          className="p-2.5 rounded-xl bg-secondary text-secondary-foreground active:scale-90 transition-transform"
        >
          <ArrowLeft className="w-5 h-5" />
        </Link>
        <h1 className="text-xl font-bold text-foreground">{t('addWordTitle')}</h1>
      </div>

      {/* Form */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-6"
      >
        <div>
          <label className="text-sm font-medium text-muted-foreground mb-2 block">
            {t('labelStudyTarget', studyLanguage)}
          </label>
          <Input
            value={lithuanian}
            onChange={(e) => setLithuanian(e.target.value)}
            placeholder={`e.g. ${addExamples.target}`}
            className="h-14 text-lg rounded-xl bg-card border-border px-4"
            autoFocus
          />
        </div>

        <div>
          <label className="text-sm font-medium text-muted-foreground mb-2 block">
            {t('labelWordDefinition')}
          </label>
          <Input
            value={english}
            onChange={(e) => setEnglish(e.target.value)}
            placeholder={t('addWordDefinitionPlaceholder')}
            className="h-14 text-lg rounded-xl bg-card border-border px-4"
            onKeyDown={(e) => e.key === 'Enter' && canSave && handleSave()}
          />
        </div>

        <motion.button
          onClick={handleSave}
          disabled={!canSave}
          whileTap={canSave ? { scale: 0.97 } : {}}
          className={`w-full py-4 rounded-xl text-lg font-semibold transition-all ${
            canSave
              ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/20'
              : 'bg-muted text-muted-foreground'
          }`}
        >
          {saved ? (
            <motion.span
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              className="flex items-center justify-center gap-2"
            >
              <Check className="w-5 h-5" /> {t('saved')}
            </motion.span>
          ) : (
            t('saveWord')
          )}
        </motion.button>
      </motion.div>

      {/* Tip */}
      <div className="mt-auto pt-10 text-center">
        <p className="text-xs text-muted-foreground/60">
          {t('tipAddWords')}
        </p>
      </div>
    </div>
  );
}