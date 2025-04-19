/**
 * Adds toggle functionality to FAQ items
 * Call this function after the component mounts to initialize the FAQ toggles
 */
export const initFaqToggles = () => {
  const faqItems = document.querySelectorAll('.faq-item');
  
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    
    question.addEventListener('click', () => {
      // Close all other FAQ items
      faqItems.forEach(otherItem => {
        if (otherItem !== item && otherItem.classList.contains('active')) {
          otherItem.classList.remove('active');
        }
      });
      
      // Toggle the current FAQ item
      item.classList.toggle('active');
    });
  });
};

export default initFaqToggles;
