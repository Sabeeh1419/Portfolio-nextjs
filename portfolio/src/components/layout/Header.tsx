import { Container } from '@/components/common/Container';
// import { LanguageSwitcher } from './LanguageSwitcher';
// import { Navigation } from './Navigation';

export function Header() {
  return (
    
      
        
          <Container>
            <div className="flex items-center justify-between py-4">
              <h1 className="text-2xl font-bold">Portfolio</h1>
              <div className="flex items-center space-x-4">
                {/* <Navigation />
                <LanguageSwitcher /> */}
              </div>
            </div>
          </Container>
        
      
    
  );
}