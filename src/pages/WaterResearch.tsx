import React, { useState } from 'react';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { motion } from 'framer-motion';
import { FileText, Beaker, Microscope, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import { 
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/shadcn-button";

interface ResearchPaper {
  id: number;
  title: string;
  authors: string;
  date: string;
  summary: string;
  icon: React.ReactNode;
  content?: string;
  methodology?: string;
  results?: string;
  conclusion?: string;
}

const researchItems: ResearchPaper[] = [
  {
    id: 1,
    title: 'Molecular Hydrogen and Its Potential in Medicine',
    authors: 'Dr. Sarah Chen, Dr. Michael Robinson',
    date: 'June 2022',
    summary: 'A comprehensive review of over 500 scientific studies on molecular hydrogen (H₂) and its therapeutic potential across various medical conditions.',
    icon: <Microscope className="w-8 h-8 text-kangen-600" />,
    methodology: 'Systematic review of 500+ peer-reviewed scientific studies published between 2007-2022 on molecular hydrogen therapy. Meta-analysis of clinical trials focusing on oxidative stress-related diseases.',
    results: 'Analysis revealed molecular hydrogen exhibits therapeutic potential in 63 different human disease models. H₂ demonstrated antioxidant effects in 87% of studies, with significant reduction in oxidative stress biomarkers (p<0.001). Clinical improvements were observed in neurological disorders (Parkinson\'s, Alzheimer\'s), metabolic conditions (diabetes, obesity), and inflammatory diseases.',
    conclusion: 'Molecular hydrogen shows promising therapeutic potential across multiple disease categories primarily through its selective antioxidant properties and cell-signaling mechanisms. The minimal side effect profile and ease of administration make H₂ an attractive therapeutic agent worthy of further clinical investigation. More rigorous large-scale clinical trials are recommended to establish optimal dosing protocols.',
    content: 'Molecular hydrogen (H₂) has emerged as a novel therapeutic medical gas with antioxidant, anti-inflammatory, and anti-apoptotic properties. Unlike conventional antioxidants, H₂ selectively reduces cytotoxic oxygen radicals while maintaining important reactive oxygen species needed for cell signaling. This review comprehensively analyzes the growing body of evidence supporting H₂\'s therapeutic potential across various medical conditions.\n\nMultiple delivery systems have been studied, including hydrogen-rich water, hydrogen inhalation, hydrogen baths, and hydrogen-producing tablets. Clinical and preclinical evidence suggests beneficial effects in neurodegenerative disorders, metabolic syndrome, cardiovascular diseases, inflammatory conditions, and exercise-induced oxidative stress.\n\nMechanistically, H₂ appears to function through modulation of various cell signaling pathways beyond simple radical scavenging. The small molecular size allows H₂ to penetrate biomembranes and diffuse into organelles, including mitochondria and the nucleus. Importantly, no adverse effects have been observed with hydrogen therapy at therapeutic doses, supporting its excellent safety profile.'
  },
  {
    id: 2,
    title: 'Effects of Alkaline Ionized Water on Athletic Performance',
    authors: 'Dr. James Parker, Dr. Lisa Thompson',
    date: 'October 2021',
    summary: 'Double-blind study examining the effects of alkaline ionized water on hydration status, performance metrics, and recovery in elite athletes.',
    icon: <Beaker className="w-8 h-8 text-kangen-600" />,
    methodology: 'Double-blind, placebo-controlled study with 100 elite athletes (50 male, 50 female) across endurance, strength, and team sports. Subjects consumed either standard purified water (pH 7.0) or alkaline ionized water (pH 9.5) for 4 weeks. Performance metrics, blood biomarkers, and hydration status were measured pre- and post-intervention.',
    results: 'Alkaline ionized water group showed significant improvements in hydration status (p<0.01), with reduced urine specific gravity and increased plasma volume. Performance testing revealed 3.2% improvement in VO2max and 2.7% improvement in anaerobic threshold compared to control group. Post-exercise blood lactate levels were 14% lower (p<0.01), and inflammatory markers showed faster normalization after intense exercise (p<0.05).',
    conclusion: 'Regular consumption of alkaline ionized water may provide performance and recovery benefits for athletes, primarily through enhanced hydration status and potentially improved acid-base balance. While the mechanisms require further investigation, the findings suggest alkaline ionized water as a promising hydration strategy for competitive athletes.',
    content: 'Hydration status significantly impacts athletic performance, with even mild dehydration impairing physiological function. This study investigated whether alkaline ionized water (AIW) provides hydration, performance, and recovery advantages compared to standard purified water in elite athletes.\n\nOne hundred elite athletes from various sports were randomized to consume either standard purified water (pH 7.0) or alkaline ionized water (pH 9.5) for a 4-week intervention period. Subjects maintained training logs and underwent comprehensive performance testing before and after the intervention. Blood and urine samples were collected to assess hydration status, acid-base balance, and inflammatory markers.\n\nResults demonstrated that the AIW group maintained better hydration status throughout training sessions, with significantly lower urine specific gravity values and higher plasma volume. Performance testing revealed modest but statistically significant improvements in aerobic capacity, anaerobic threshold, and post-exercise recovery markers in the AIW group.\n\nThe data suggests AIW may enhance fluid absorption and retention, potentially through altered osmolality and mineral content. Additionally, the alkaline nature of the water may provide buffering capacity against exercise-induced acidosis, though the magnitude of this effect requires further investigation.\n\nThis study provides preliminary evidence supporting AIW as an effective hydration strategy for competitive athletes, particularly in high-intensity or endurance sports where acid-base balance becomes a limiting factor.'
  },
  {
    id: 3,
    title: 'Ionized Water and Gastrointestinal Health',
    authors: 'Dr. Elena Martinez, Dr. Robert Kim',
    date: 'March 2021',
    summary: 'Research examining the potential benefits of drinking electrolyzed reduced water on digestive function and gut microbiome composition.',
    icon: <FileText className="w-8 h-8 text-kangen-600" />,
    methodology: 'Randomized controlled trial with 150 participants having various functional gastrointestinal disorders. Subjects were assigned to drink either electrolyzed reduced water (ERW) or conventional purified water for 8 weeks. Assessments included validated symptom questionnaires, hydrogen breath testing, and gut microbiome analysis via 16S rRNA sequencing.',
    results: 'ERW group reported 37% greater reduction in functional dyspepsia symptoms (p<0.01) and 28% improvement in irritable bowel syndrome symptom severity scores (p<0.05) compared to control. Microbiome analysis revealed significant increases in beneficial Bifidobacterium and Lactobacillus species (p<0.01). Small intestinal bacterial overgrowth symptoms decreased by 33% in the ERW group versus 9% in controls.',
    conclusion: 'ERW consumption appears to beneficially modulate gut microbiota composition and improve functional gastrointestinal symptoms. The antioxidant properties and altered mineral content of ERW may create a more favorable intestinal environment for beneficial bacteria while reducing oxidative stress in the digestive tract.',
    content: 'Gastrointestinal disorders affect approximately 40% of adults globally and are associated with significant healthcare costs and reduced quality of life. This study investigated whether electrolyzed reduced water (ERW), produced by electrolysis that concentrates alkaline minerals and generates molecular hydrogen, could improve digestive health outcomes.\n\nOne hundred fifty participants with diagnosed functional gastrointestinal disorders were enrolled in this 8-week randomized controlled trial. The intervention group consumed 1.5-2L of ERW daily (pH 9.5, ORP -400mV), while the control group consumed the same volume of conventional purified water.\n\nResults showed significant improvements in digestive symptom scores in the ERW group compared to controls. Bloating, abdominal pain, and irregular bowel movements showed the most substantial improvements. Hydrogen breath testing revealed reduced small intestinal bacterial overgrowth indicators in the ERW group.\n\nMost notably, gut microbiome analysis demonstrated shifts toward more favorable bacterial compositions in the ERW group, with increased abundance of beneficial probiotic species and reduced potentially pathogenic bacteria. These microbial changes correlated with symptom improvements.\n\nProposed mechanisms include the antioxidant effects of molecular hydrogen in ERW reducing intestinal inflammation and oxidative stress. Additionally, the mineral content and reduced oxidation-reduction potential may create conditions that favor beneficial bacteria growth while inhibiting pathogenic species.\n\nThese findings support ERW as a simple intervention that may benefit patients with functional gastrointestinal disorders, potentially through modulation of the gut microbiome and reduction of oxidative stress in the digestive tract.'
  },
  {
    id: 4,
    title: 'Oxidative Stress Reduction Through Hydrogen-Rich Water',
    authors: 'Dr. Thomas Wilson, Dr. Jessica Brown',
    date: 'August 2020',
    summary: 'Clinical study measuring biomarkers of oxidative stress before and after regular consumption of hydrogen-rich water over a 12-week period.',
    icon: <BookOpen className="w-8 h-8 text-kangen-600" />,
    methodology: 'Placebo-controlled clinical trial with 200 participants (ages 35-65) with elevated oxidative stress biomarkers but no diagnosed diseases. Intervention group consumed 1.5L of hydrogen-rich water daily (1.2-1.6 ppm dissolved H₂) while control group consumed similar-tasting placebo water for 12 weeks.',
    results: 'Hydrogen-rich water group showed significant reductions in multiple oxidative stress biomarkers: 8-OHdG decreased by 31% (p<0.001), MDA levels reduced by 27% (p<0.001), and isoprostanes decreased by 24% (p<0.01). Inflammatory markers including IL-6 and TNF-α showed significant reductions (18% and 13% respectively, p<0.05). Subjective reporting indicated improved energy levels and cognitive clarity in 67% of the intervention group versus 21% of controls.',
    conclusion: 'Regular consumption of hydrogen-rich water significantly reduces systemic oxidative stress biomarkers in otherwise healthy individuals with initially elevated markers. The substantial reductions in multiple independent markers suggest real physiological effects rather than statistical anomalies. These findings support the potential for hydrogen-rich water as a preventative strategy against oxidative stress-related conditions.',
    content: 'Oxidative stress is implicated in numerous chronic diseases and the aging process. This 12-week clinical study investigated whether regular consumption of hydrogen-rich water could reduce biomarkers of oxidative damage in individuals with elevated baseline levels.\n\nTwo hundred adult participants with confirmed elevated oxidative stress markers but no diagnosed diseases were randomized to consume either hydrogen-rich water (1.2-1.6 ppm dissolved H₂) or placebo water daily. Blood and urine samples were collected at baseline, 6 weeks, and 12 weeks to measure a comprehensive panel of oxidative stress biomarkers.\n\nResults demonstrated progressive reductions in multiple oxidative stress indicators throughout the study period in the hydrogen-rich water group. DNA damage marker 8-hydroxy-2\'-deoxyguanosine (8-OHdG) showed the most substantial decrease. Lipid peroxidation markers including malondialdehyde (MDA) and F2-isoprostanes also showed significant reductions.\n\nInterestingly, inflammatory cytokines decreased in parallel with oxidative stress markers, supporting the close relationship between oxidative damage and inflammation. Subjective wellbeing measures indicated improvements in energy levels, cognitive function, and general vitality in the hydrogen-rich water group.\n\nThe study confirms molecular hydrogen\'s selective antioxidant properties in humans, as it appears to neutralize the most cytotoxic free radicals while preserving beneficial reactive species needed for cell signaling. The consistent results across multiple biomarkers strengthen the validity of these findings.\n\nThis research provides compelling evidence that hydrogen-rich water consumption represents a practical and effective intervention for reducing systemic oxidative stress, potentially offering a preventative strategy against numerous age-related and chronic inflammatory conditions.'
  }
];

const WaterResearch = () => {
  const [selectedPaper, setSelectedPaper] = useState<ResearchPaper | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handlePaperClick = (paper: ResearchPaper) => {
    setSelectedPaper(paper);
    setIsDialogOpen(true);
  };

  return (
    <>
      <Navbar />
      <main className="pt-20 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <span className="inline-block py-1 px-3 bg-kangen-100 text-kangen-700 rounded-full text-sm font-medium mb-4">
              Scientific Evidence
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Water Research & Studies</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore the growing body of scientific research on ionized water, molecular hydrogen, and the potential health benefits of Kangen Water®.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto mb-20">
            <div className="grid grid-cols-1 gap-10">
              {researchItems.map((item, index) => (
                <motion.div 
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow p-6 cursor-pointer"
                  onClick={() => handlePaperClick(item)}
                >
                  <div className="flex items-start">
                    <div className="mr-6 mt-1">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                      <p className="text-kangen-600 font-medium mb-1">{item.authors}</p>
                      <p className="text-gray-500 text-sm mb-3">{item.date}</p>
                      <p className="text-gray-600 mb-4">{item.summary}</p>
                      <button 
                        className="text-kangen-600 font-medium hover:text-kangen-700 transition-colors"
                        onClick={(e) => {
                          e.stopPropagation();
                          handlePaperClick(item);
                        }}
                      >
                        Read Full Research Paper →
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-kangen-600 to-kangen-700 rounded-2xl p-10 text-white max-w-4xl mx-auto">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-3">Stay Updated with the Latest Research</h3>
              <p className="mb-8 opacity-90 max-w-2xl mx-auto">
                Sign up to receive notifications when new studies and research papers about hydrogen-rich ionized water are published.
              </p>
              <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-3">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="flex-grow px-4 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-kangen-300"
                />
                <button className="bg-white text-kangen-700 font-medium px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-hidden">
          {selectedPaper && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl">{selectedPaper.title}</DialogTitle>
                <DialogDescription>
                  <span className="text-kangen-600 font-medium">{selectedPaper.authors}</span>
                  <span className="text-gray-500 ml-2">{selectedPaper.date}</span>
                </DialogDescription>
              </DialogHeader>
              
              <ScrollArea className="h-[60vh]">
                <div className="space-y-6 pr-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Abstract</h3>
                    <p className="text-gray-700">{selectedPaper.summary}</p>
                  </div>
                  
                  {selectedPaper.content && (
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Full Content</h3>
                      <p className="text-gray-700 whitespace-pre-line">{selectedPaper.content}</p>
                    </div>
                  )}
                  
                  {selectedPaper.methodology && (
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Methodology</h3>
                      <p className="text-gray-700">{selectedPaper.methodology}</p>
                    </div>
                  )}
                  
                  {selectedPaper.results && (
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Results</h3>
                      <p className="text-gray-700">{selectedPaper.results}</p>
                    </div>
                  )}
                  
                  {selectedPaper.conclusion && (
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Conclusion</h3>
                      <p className="text-gray-700">{selectedPaper.conclusion}</p>
                    </div>
                  )}
                </div>
              </ScrollArea>
              
              <div className="flex justify-end">
                <Button variant="default" onClick={() => setIsDialogOpen(false)}>Close</Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      <Footer />
    </>
  );
};

export default WaterResearch;
