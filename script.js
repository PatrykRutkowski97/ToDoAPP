document.addEventListener('DOMContentLoaded', function()
{
    const add = document.querySelector('#todo-add');
    const textarea = document.querySelector('textarea');
    const pole = document.querySelector('#todosearch');
    const lista = document.querySelector('#todo-list');



    add.addEventListener('click', function()
    {
        const text = textarea.value;

        if(text == '')
        {
            return 0;
        }
        else
        {
            console.log('Dodano');
            const card = document.createElement('div');
            card.classList.add('card');
            const card_body = document.createElement('div');
            card_body.classList.add('card-body');
            const title = document.createElement('h5');
            title.classList.add('card-title');
            title.innerText = text;
            const data = new Date();
            const dodano = document.createElement('p');
            let minuty = data.getMinutes();
            if(minuty < 10)
                minuty = '0' + minuty;
            dodano.innerText = 'Dodano: ' + data.getDate() + '.' + (data.getMonth()+1) + '.' + data.getFullYear() + ' ' + data.getHours() + ':' + minuty;
        
            const button = document.createElement('button');
            button.classList.add('btn');
            button.classList.add('btn-success');
            button.innerText = 'Wykonano';

            button.addEventListener('click', function()
            {
                card.remove();
                console.log('Usunięto');
            });

            card_body.append(title);
            card_body.append(dodano);
            card_body.append(button);
            card.append(card_body);
            lista.append(card);

            textarea.value = '';
        }
    });

    pole.addEventListener('input', function()
    {
        const elements = lista.querySelectorAll('.card');
        const searchval = pole.value

        console.log('Wyszukiwana: ' + searchval);

        [].forEach.call(elements, function(el)
        {
            const titleB = el.querySelector('.card-title').innerText;
            
            if(titleB.indexOf(searchval) !== -1)
            {
                el.style.setProperty('display','');
            }
            else
            {
                el.style.setProperty('display','none');
            }

        });
    })


})