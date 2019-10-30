import useLocalStorage from './useLocalStorage';
import {useEffect} from 'react';

const useDarkMode = () => {

    const [someValue, setSomeValue] = useLocalStorage('dark-Mode');

    useEffect(()=>{

        if(someValue === true){
            return document.body.classList.add('dark-mode')
        }else{
            return document.body.classList.remove('dark-mode')
        }

    },[someValue])

    return [someValue, setSomeValue]
}

export default useDarkMode;