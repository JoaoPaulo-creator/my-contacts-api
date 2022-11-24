Projetinho criado no curso JStack


<h1>Observações do projeto (e anotações pessoais)</h1>

<p>Este projeto segue alguns padrões, sendo um deles o repository pattern. O que é repository pattern?</p> <br />

<p>É uma camda de abstração de acesso ao datasource, dessa forma o controller não precisa ter acesso a fonte de dados. A responsabilidade do repository é apenas acessar a datasource, regras de negócio vão ficar em outro lugar, ou seja, não deverão haver condicionais (if's)
dentro do meu repository. </p>