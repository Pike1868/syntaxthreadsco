import { Link } from "react-router-dom";
import { useAppSelector } from '../store'; 

export default function Logo() {
    const theme = useAppSelector((state) => state.themeState.theme);

    return (
        <Link to="/" className="flex items-center justify-center">
            <img 
                src={theme === "light" ? "/syntaxthreads-original-logo2.png" : "/syntax-threads-light-logo2.png"}
                alt="SyntaxThreadsCo Logo" 
                className="h-8 w-auto md:h-10 object-contain transition-all duration-200 hover:scale-105" 
            />
        </Link>
    );
}
