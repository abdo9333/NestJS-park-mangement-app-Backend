Install ressource : 

nest generate resource trees

Pour l'update on utilise put pas patch 

- pour la gestion de db on utilise typeOrem et sql 
    ressource : https://docs.nestjs.com/techniques/database

     npm install --save @nestjs/typeorm typeorm mysql2

     puis déclaration de notre typeOrm dans app.module
