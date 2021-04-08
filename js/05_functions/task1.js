// let mailsInput = ['sdfasd@mail.ru', 'asdfsdf@mail.ru', 'dfdf@mail.ru', 'dfd@mail.ru'];
// let mailsInBlack = ['dfd@mail.ru', 'asdfsdf@mail.ru', '123@mail.ru'];
let mails = [];
let err = 0;

function getValidMail(mailsInput, mailsInBlack) {
    for (let mail of mailsInput) {
        for (let i = 0; i < mailsInBlack.length; i++) {
            if (mail === mailsInBlack[i]) {
                console.log('Не валидная почта: ' + mail);
                err++;
            }
        }
        if (err === 0) {
            mails.push(mail);
        }
        err = 0;
    }
    console.log('Валидные почты: ' + mails);

}

export default {
    getValidMail(mailsInput, mailsInBlack);
}