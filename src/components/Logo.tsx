import { Link } from "react-router-dom";
import { useAppSelector } from '../store'; 

export default function Logo() {
    const theme = useAppSelector((state) => state.themeState.theme);

    // For system theme, use CSS classes like Footer does
    if (theme === "system") {
        return (
            <Link to="/" className="flex items-center justify-center">
                {/* Light logo for dark theme (system) */}
                <img 
                    src="/syntax-threads-light-logo2.png"
                    alt="SyntaxThreadsCo Logo" 
                    className="h-8 w-auto md:h-10 object-contain transition-all duration-200 hover:scale-105 dark:block hidden" 
                />
                {/* Dark logo for light theme (system) */}
                <img 
                    src="/syntaxthreads-dark-logo2.png"
                    alt="SyntaxThreadsCo Logo" 
                    className="h-8 w-auto md:h-10 object-contain transition-all duration-200 hover:scale-105 dark:hidden block" 
                />
            </Link>
        );
    }

    // For manual light/dark selection, use Redux state
    return (
        <Link to="/" className="flex items-center justify-center">
            <img 
                src={theme === "light" ? "/syntaxthreads-dark-logo2.png" : "/syntax-threads-light-logo2.png"}
                alt="SyntaxThreadsCo Logo" 
                className="h-8 w-auto md:h-10 object-contain transition-all duration-200 hover:scale-105" 
            />
        </Link>
    );
}
