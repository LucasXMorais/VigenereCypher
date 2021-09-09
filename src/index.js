document.addEventListener('DOMContentLoaded', () => {

    const decrypted = document.getElementById("decrypted");
    const encrypted = document.getElementById("encrypted");
    const clear = document.getElementById("clear");
    const cypher = document.getElementById("cypher");
    const password = document.getElementById("password");

    cypher.addEventListener('click', code);
    clear.addEventListener('click', clearAll);

    const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

    function code(){

        if (decrypted.value != '' && password.value != ''){

            let message = decrypted.value.replace(/\s+/g, '');
            let key = password.value;

            let encryptedMessage = '';
            let keyI = 0;
            for (let i = 0; i < message.length; i++){        
                let indexMessage = alphabet.indexOf(message[i].toLocaleLowerCase());
                let tempMessage = alphabet.slice(indexMessage).concat(alphabet.slice(0,indexMessage));

                if (keyI > key.length-1){
                    keyI = 0;
                }
                let indexKey = alphabet.indexOf(key[keyI].toLocaleLowerCase());
                keyI++;

                encryptedMessage += tempMessage[indexKey].toLocaleUpperCase();

            } 

            encrypted.value = encryptedMessage;

        } else if (encrypted.value != '' && password.value != ''){

            let message = encrypted.value.replace(/\s+/g, '');
            let key = password.value;

            let decryptedMessage = '';
            let keyI = 0;
            for (let i = 0; i < message.length; i++){

                if (keyI > key.length-1){
                    keyI = 0;
                }

                let j;

                for (j = 0; j < alphabet.length; j++){
                    let tempAlpha = alphabet.slice(j).concat(alphabet.slice(0,j));
                    if (tempAlpha.indexOf(message[i].toLocaleLowerCase()) === alphabet.indexOf(key[keyI].toLocaleLowerCase())){
                        break;
                    }
                }

                decryptedMessage += alphabet[j].toLocaleUpperCase();

                keyI++;
            }

            decrypted.value = decryptedMessage;
        }
    }

    function clearAll(){
        decrypted.value = null;
        encrypted.value = null;
        password.value = null;
    }

});