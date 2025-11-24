import { jsPDF } from 'jspdf';

export const generateContentPDF = () => {
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 20;
  const maxWidth = pageWidth - 2 * margin;
  let yPosition = margin;

  const addPage = () => {
    doc.addPage();
    yPosition = margin;
  };

  const checkPageBreak = (requiredSpace: number) => {
    if (yPosition + requiredSpace > pageHeight - margin) {
      addPage();
    }
  };

  const addTitle = (text: string, size: number = 16) => {
    checkPageBreak(15);
    doc.setFontSize(size);
    doc.setFont('helvetica', 'bold');
    doc.text(text, margin, yPosition);
    yPosition += size / 2 + 5;
  };

  const addSubtitle = (text: string, size: number = 12) => {
    checkPageBreak(12);
    doc.setFontSize(size);
    doc.setFont('helvetica', 'bold');
    doc.text(text, margin, yPosition);
    yPosition += size / 2 + 4;
  };

  const addText = (text: string, indent: number = 0) => {
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    const lines = doc.splitTextToSize(text, maxWidth - indent);
    
    lines.forEach((line: string) => {
      checkPageBreak(8);
      doc.text(line, margin + indent, yPosition);
      yPosition += 6;
    });
  };

  const addBullet = (text: string) => {
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    const bulletIndent = 5;
    const textIndent = 10;
    
    checkPageBreak(8);
    doc.text('•', margin + bulletIndent, yPosition);
    
    const lines = doc.splitTextToSize(text, maxWidth - textIndent - bulletIndent);
    lines.forEach((line: string, index: number) => {
      if (index > 0) checkPageBreak(8);
      doc.text(line, margin + textIndent, yPosition);
      yPosition += 6;
    });
  };

  const addSpace = (space: number = 5) => {
    yPosition += space;
  };

  const addDivider = () => {
    checkPageBreak(5);
    doc.setDrawColor(200, 200, 200);
    doc.line(margin, yPosition, pageWidth - margin, yPosition);
    yPosition += 8;
  };

  // Header
  doc.setFillColor(46, 125, 50);
  doc.rect(0, 0, pageWidth, 30, 'F');
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(20);
  doc.setFont('helvetica', 'bold');
  doc.text('Eduna Finland', pageWidth / 2, 20, { align: 'center' });
  doc.setTextColor(0, 0, 0);
  yPosition = 45;

  addTitle('Complete Site Content', 18);
  addText('Updated November 2024');
  addSpace(10);
  addDivider();

  // HOME PAGE
  addTitle('HOME PAGE', 14);
  addSpace(5);
  
  addSubtitle('Hero Section');
  addText('Headline: Inclusive Education. The Finnish Way.');
  addText('Subheadline: Expert training and practical support to help your educators work confidently with diverse learners and SEN (Special Educational Needs).');
  addSpace(8);

  addSubtitle('Why Finnish Education?');
  addText('We don\'t believe in one-size-fits-all solutions. Instead, we take what makes Finnish inclusive education exceptional—its evidence-based practices and collaborative spirit—and adapt it to fit your unique context, culture, and goals.');
  addSpace(5);
  addBullet('Every Child Deserves to Thrive: Every child has the right to feel safe, capable, and valued.');
  addBullet('Collaboration & Reflection: Keys to growth. Small, thoughtful changes can lead to meaningful impact.');
  addBullet('Practical from Day One: Your educators get strategies, materials, and know-how they can use immediately.');
  addBullet('Build Trust & Recognition: When educators master inclusive practices, guardians trust them.');
  addSpace(8);

  addSubtitle('Impact Section');
  addText('Invest in Your Educators, Transform Your Setting');
  addText('We help educational leaders create sustainable change by strengthening their greatest asset: their educators.');
  addSpace(5);
  addBullet('Practical materials and strategies to use from day one');
  addBullet('Know-how to build inclusive lessons and communications');
  addBullet('Confidence working with children and their guardians');
  addBullet('Recognition and trust from guardians for their expertise');
  addBullet('Sustainable practices rooted in collaboration and reflection');
  addSpace(10);
  addDivider();

  // SERVICES PAGE
  addTitle('SERVICES PAGE', 14);
  addSpace(5);
  
  addSubtitle('Service Packages');
  addSpace(5);

  addSubtitle('Discovery - Start Your Inclusion Journey', 11);
  addText('Timeline: 2-4 weeks | Starting package');
  addText('Perfect for educational settings taking their first steps toward systemic inclusion.');
  addBullet('Assessment of current practices');
  addBullet('Goal-setting workshop with leadership team');
  addBullet('Custom action plan with clear next steps');
  addBullet('Follow-up consultation to ensure momentum');
  addSpace(8);

  addSubtitle('Transform - Build Lasting Capacity [MOST POPULAR]', 11);
  addText('Timeline: 3-6 months | Most popular');
  addText('Comprehensive support to embed inclusion into your educational culture.');
  addBullet('Assessment of current practices');
  addBullet('Customized workshop series for all staff');
  addBullet('Inclusive lesson plans');
  addBullet('Regular team consultation and coaching');
  addBullet('Ongoing support');
  addSpace(8);

  addSubtitle('Partnership - Long-Term Excellence', 11);
  addText('Timeline: 12+ months | Premium support');
  addText('Ongoing collaboration to achieve world-class inclusive education.');
  addBullet('Monthly training and development sessions');
  addBullet('Leadership mentoring and coaching');
  addBullet('Priority consultation and rapid support');
  addSpace(10);
  addDivider();

  // ABOUT PAGE
  addTitle('ABOUT PAGE', 14);
  addSpace(5);
  
  addSubtitle('Olga Saghar - Co-Founder & Special Education Expert');
  addText('With over 15 years working in Finland and internationally, including the MENA region, Olga currently supports 25+ educators in private early years centres and preschools. She holds a Master\'s in Early Childhood Special Education and Psychology with specialized training in speech therapy.');
  addSpace(5);
  addText('Her strength is early intervention and building bridges between educators and families. When communication gets complex or cultural differences create uncertainty, Olga brings clarity.');
  addSpace(8);

  addSubtitle('Päivi Pekkala - Co-Founder & Inclusion Specialist');
  addText('Over 25 years, Päivi has supported hundreds of educators working with children who have ADHD and autism. She holds five degrees in education and brings personal experience as a parent navigating these same challenges.');
  addSpace(5);
  addText('Her approach is simple: listen first, then solve together. Educators gain practical skills to handle situations that once felt overwhelming. Parents find someone who truly understands.');
  addSpace(10);
  addDivider();

  // APPROACH PAGE
  addTitle('APPROACH PAGE', 14);
  addSpace(5);
  
  addSubtitle('Finnish Special Education Framework');
  addBullet('Learning Through Play & Curiosity: Children explore through joyful, hands-on experiences');
  addBullet('All-Day Pedagogy: Learning happens everywhere — in play, routines, and relationships');
  addBullet('Equality & Inclusion as Foundation: Every child deserves the same opportunities');
  addBullet('Collaboration & Reflection: Teachers work together and reflect on their practice');
  addBullet('Trust in Teachers: Educators are respected professionals with autonomy');
  addBullet('Shared Responsibility: Education is collaborative between teachers, caregivers, and community');
  addSpace(8);

  addSubtitle('How We Work');
  addBullet('We Hear: Listen and build on each setting\'s strengths and culture');
  addBullet('We Support: Help educators think together and grow shared understanding');
  addBullet('We Are Practical: Focus on small, realistic steps that make visible difference');
  addBullet('We\'re Holistic: See learning as something that happens everywhere');
  addSpace(10);
  addDivider();

  // CONTACT
  addTitle('CONTACT PAGE', 14);
  addSpace(5);
  addText('Free Consultation Available');
  addText('Ready to strengthen inclusive education? Book a complimentary consultation to explore how we can support your journey.');
  addSpace(8);

  addSubtitle('Why Work With Us?');
  addBullet('35+ Years Combined Experience');
  addBullet('100% Collaborative Approach');
  addBullet('Unlimited Potential for Growth');

  // Footer
  const footerY = pageHeight - 15;
  doc.setFontSize(8);
  doc.setTextColor(128, 128, 128);
  doc.text('Eduna Finland - Finnish Inclusive Education Expertise', pageWidth / 2, footerY, { align: 'center' });
  doc.text(`Generated: ${new Date().toLocaleDateString()}`, pageWidth / 2, footerY + 5, { align: 'center' });

  // Save the PDF
  doc.save('Eduna-Finland-Site-Content.pdf');
};
