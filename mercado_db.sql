CREATE SCHEMA mercado_db;

USE mercado_db;

CREATE TABLE USERS (
	id 			INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    name 		VARCHAR(100) NOT NULL,
    email 		VARCHAR(255) NOT NULL UNIQUE,
    password 	VARCHAR(255) NOT NULL,

    -- Auditoria
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE PRODUCTS (
	id 			INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    name 		VARCHAR(100) NOT NULL,
    image 		VARCHAR(500) NOT NULL,
    description VARCHAR(500),
    user_id 	INT UNSIGNED DEFAULT NULL,
    
    -- FOREGIN KEY (USER_ID)
    FOREIGN KEY(user_id) REFERENCES USERS(id),
    
    -- Auditoria
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP
);

INSERT INTO USERS VALUES (DEFAULT, 'Juan Cruz', 'juancruz@gmail.com', '1234', DEFAULT, DEFAULT, NULL);
INSERT INTO USERS VALUES (DEFAULT, 'Juan Malia', 'juanmalia@hotmail.com', '1234', DEFAULT, DEFAULT, NULL);
INSERT INTO USERS VALUES (DEFAULT, 'Santiago', 'santiago@gmail.com', '1234', DEFAULT, DEFAULT, NULL);
INSERT INTO USERS VALUES (DEFAULT, 'Marcos', 'marcos@gmail.com', '1234', DEFAULT, DEFAULT, NULL);
INSERT INTO USERS VALUES (DEFAULT, 'Justo', 'justo@gmail.com', '1234', DEFAULT, DEFAULT, NULL);

INSERT INTO PRODUCTS VALUES (DEFAULT, 'Licuadora', 'https://smartlifear.vtexassets.com/arquivos/ids/155425-800-auto?v=638127620800730000&width=800&height=auto&aspect=true', 'Muy buena y util', 1, DEFAULT, DEFAULT, NULL);
INSERT INTO PRODUCTS VALUES (DEFAULT, 'Alfombra', 'https://acdn.mitiendanube.com/stores/002/238/751/products/20230204_1514491-0de003e2192d687e3016755377265362-640-0.jpg', 'Muy buena y util', 2, DEFAULT, DEFAULT, NULL);
INSERT INTO PRODUCTS VALUES (DEFAULT, 'Taza', 'https://acdn.mitiendanube.com/stores/001/499/576/products/d_616500-mla31364218345_072019-o-294cc50753ad0cab2616473801342055-640-0.jpg', 'Muy buena y util', 3, DEFAULT, DEFAULT, NULL);
INSERT INTO PRODUCTS VALUES (DEFAULT, 'Sofa', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReDdFL1ZheVSMGuyWRc2KuJBxk_WERvcv8Og&s', 'Muy buena y util', 3, DEFAULT, DEFAULT, NULL);
INSERT INTO PRODUCTS VALUES (DEFAULT, 'Almohadon', 'https://laviehome.com.ar/wp-content/uploads/2022/12/almohadon-lino-rectangular-scaled.jpg', 'Muy buena y util', 5, DEFAULT, DEFAULT, NULL);


