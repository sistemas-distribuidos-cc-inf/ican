Quando uma pessoa deseja iniciar uma conversa por chat
Deve verificar todos os voluntários disponíveis que estão habilitados para chat
Verificar com o vonlutário se deseja iniciar uma conversa naquele momomento
Após ter um voluntário
Deve iniciar um atendimento
O atendimento deve ter informações do voluntário e da pessoa e todas as mensagens trocas por eles
Cada mensagem deve conter o usuário que está enviando, o usuário que irá receber e qual atendimento pertence

Estrutura do banco do atendimento:
```js
    {
        _id: atendimentoId,
        userId: userId,
        vonlutaryId: userId,
        posts: [
            messageId
        ]
    }
```


Estrutura do banco da mensagem:
```js
    {
        _id: messageId,
        userSend: userId,
        userReceive: userId,
        messagem: 'message content'
    }
```

Estrutura do banco dos volutários disponíveis mensagem:
```js
    {
        _id: availableVonlutaryId,
        chat: (true || false),
        voice: (true || false),
        video: (true || false),
    }
```