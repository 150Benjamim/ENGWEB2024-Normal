Através da análise do dataset decidi mudar o compo "idcontrato" para "_id", de forma a evitar que o mongoDB crie o seu próprio campo "_id".
Alterei valores que deviam ser números mas estavam em formato string para o respetivo número.


Para dar setup ao mongoDB usei os comandos:
```
docker cp contratos2024.json mongoEWTeste:/tmp
docker exec mongoEWTeste mongoimport -d contratos -c contratos /tmp/contratos2024.json --jsonArray
```


API:
Comecei por correr o comando:
```
npx express-generator --no-view ex1
```

Alterei a porta no ficheiro bin/www para 16000.

Após criei os folders controllers e models para guardar as interações com a BD.
Criei também as rotas necessárias em "routes/contratos.js".

Para instalar depêndencias e mongoose usei, respetivamente:
```
npm install
npm install mongoose
```



INTERFACE:

Comecei por correr o comando:
```
npx express-generator --view-pug ex1
```

Alterei a porta no ficheiro bin/www para 16001.


