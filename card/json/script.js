/*
         * Gera automaticamente os números das linhas
         * para todos os blocos de código da página.
         *
         * Não é necessário informar manualmente:
         * 1, 2, 3, 4...
         */

        document.querySelectorAll(".code-content").forEach(codeBlock => {

            const code = codeBlock.querySelector("code");
            const lineNumbers = codeBlock.querySelector(".line-numbers");

            if (!code || !lineNumbers) {
                return;
            }

            /*
             * textContent mantém o conteúdo original do código
             * sem considerar as tags HTML usadas para colorização.
             */
            const totalLines = code.textContent.split("\n").length;

            /*
             * Limpa a coluna antes de gerar os números.
             */
            lineNumbers.innerHTML = "";

            /*
             * Cria um número para cada linha.
             */
            for (let line = 1; line <= totalLines; line++) {

                const number = document.createElement("span");

                number.textContent = line;

                lineNumbers.appendChild(number);
            }

        });