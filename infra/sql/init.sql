CREATE DATABASE Biblioteca;

CREATE SEQUENCE seq_ra START 1;

CREATE TABLE Aluno (
    id_aluno SERIAL PRIMARY KEY,
    ra VARCHAR (7) UNIQUE NOT NULL,
    nome VARCHAR (80) NOT NULL,
    sobrenome VARCHAR (80) NOT NULL,
    data_nascimento DATE,
    endereco VARCHAR (200),
    email VARCHAR (80),
    celular VARCHAR (20) NOT NULL
);

CREATE OR REPLACE FUNCTION gerar_ra() RETURNS TRIGGER AS $$
BEGIN
    NEW.ra := 'AAA' || TO_CHAR(nextval('seq_ra'), 'FM0000');
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trg_gerar_ra
BEFORE INSERT ON Aluno
FOR EACH ROW EXECUTE FUNCTION gerar_ra();

CREATE TABLE Livro (
    id_livro SERIAL PRIMARY KEY,
    titulo VARCHAR (200) NOT NULL,
    autor VARCHAR (150) NOT NULL,
    editora VARCHAR (100) NOT NULL,
    ano_publicacao VARCHAR (5),
    isbn VARCHAR (20),
    quant_total INTEGER NOT NULL,
    quant_disponivel INTEGER NOT NULL,
    valor_aquisicao DECIMAL (10,2),
    status_livro_emprestado VARCHAR (20)
);

CREATE TABLE Emprestimo (
    id_emprestimo SERIAL PRIMARY KEY,
    id_aluno INT REFERENCES Aluno(id_aluno),
    id_livro INT REFERENCES Livro(id_livro),
    data_emprestimo DATE NOT NULL,
    data_devolucao DATE,
    status_emprestimo VARCHAR (20)
);


INSERT INTO Aluno (nome, sobrenome, data_nascimento, endereco, email, celular) 
VALUES 
('Conor', 'McGregor', '2005-01-15', 'Rua UFC, 123', 'mcgregor@ufc.com', '16998959876'),
('Amanda', 'Nunes', '2004-03-22', 'Rua UFC, 456', 'amanda.nunes@ufc.com', '16995992305'),
('Angelina', 'Jolie', '2003-07-10', 'Rua Hollywood, 789', 'jolie@cinema.com', '16991915502'),
('Natalie', 'Portman', '2002-11-05', 'Rua Hollywood, 101', 'natalie.portman@cinema.com', '16993930703'),
('Shaquille', 'ONeal', '2004-09-18', 'Rua NBA, 202', 'shaquille@gmail.com', '16993937030'),
('Harry', 'Kane', '2000-05-18', 'Rua Futebol, 2024', 'kane@futi.com', '16998951983'),
('Jaqueline', 'Carvalho', '2001-12-10', 'Rua Volei, 456', 'jack@volei.com', '16991993575'),
('Sheilla', 'Castro', '2003-04-25', 'Rua Volei, 2028', 'sheilla.castro@volei.com', '16981974547'),
('Gabriela', 'Guimarães', '2007-08-19', 'Rua Volei, 2028', 'gaby@volei.com', '16983932215'),
('Magic', 'Johnson', '2003-07-08', 'Rua NBA, 1999', 'magic@gmail.com', '16993932020');

INSERT INTO Livro (titulo, autor, editora, ano_publicacao, isbn, quant_total, quant_disponivel, valor_aquisicao, status_livro_emprestado) 
VALUES 
('O Senhor dos Anéis', 'J.R.R. Tolkien', 'HarperCollins', '1954', '978-0007525546', 10, 10, 150.00, 'Disponível'),
('1984', 'George Orwell', 'Companhia das Letras', '1949', '978-8535906770', 8, 8, 90.00, 'Disponível'),
('Dom Quixote', 'Miguel de Cervantes', 'Penguin Classics', '1605', '978-0142437230', 6, 6, 120.00, 'Disponível'),
('O Pequeno Príncipe', 'Antoine de Saint-Exupéry', 'Agir', '1943', '978-8522008731', 12, 12, 50.00, 'Disponível'),
('A Revolução dos Bichos', 'George Orwell', 'Penguin', '1945', '978-0141036137', 7, 7, 80.00, 'Disponível'),
('O Hobbit', 'J.R.R. Tolkien', 'HarperCollins', '1937', '978-0007458424', 9, 9, 140.00, 'Disponível'),
('O Conde de Monte Cristo', 'Alexandre Dumas', 'Penguin Classics', '1844', '978-0140449266', 5, 5, 110.00, 'Disponível'),
('Orgulho e Preconceito', 'Jane Austen', 'Penguin Classics', '1813', '978-0141439518', 7, 7, 90.00, 'Disponível'),
('Moby Dick', 'Herman Melville', 'Penguin Classics', '1851', '978-0142437247', 4, 4, 100.00, 'Disponível'),
('Guerra e Paz', 'Liev Tolstói', 'Companhia das Letras', '1869', '978-8535922343', 3, 3, 130.00, 'Disponível');

INSERT INTO Emprestimo (id_aluno, id_livro, data_emprestimo, data_devolucao, status_emprestimo) 
VALUES 
(1, 2, '2024-09-01', '2024-09-15', 'Em andamento'),
(2, 1, '2024-09-02', '2024-09-16', 'Em andamento'),
(3, 5, '2024-09-03', '2024-09-17', 'Em andamento'),
(5, 3, '2024-09-04', '2024-09-18', 'Em andamento'),
(4, 6, '2024-09-05', '2024-09-19', 'Em andamento'),
(6, 4, '2024-09-06', '2024-09-20', 'Em andamento'),
(7, 8, '2024-09-07', '2024-09-21', 'Em andamento'),
(8, 7, '2024-09-08', '2024-09-22', 'Em andamento'),
(10, 9, '2024-09-09', '2024-09-23', 'Em andamento'),
(9, 10, '2024-09-10', '2024-09-24', 'Em andamento'),
(1, 10, '2024-09-11', '2024-09-25', 'Em andamento'),
(2, 3, '2024-09-11', '2024-09-25', 'Em andamento'),
(4, 5, '2024-09-11', '2024-09-25', 'Em andamento'),
(6, 2, '2024-09-11', '2024-09-25', 'Em andamento');

INSERT INTO Aluno (nome, sobrenome, data_nascimento, endereco, email, celular) 
VALUES 
('LeBron', 'James', '2004-12-30', 'Avenida Basquete, 123', 'lebron.james@nba.com', '16912345678'),
('Serena', 'Williams', '2003-09-26', 'Rua Tênis, 456', 'serena.williams@tennis.com', '16987654321'),
('Robert', 'Downey', '2002-05-14', 'Rua Cinema, 789', 'robert.downey@cinema.com', '16923456789'),
('Gal', 'Gadot', '2001-04-30', 'Rua Heroína, 101', 'gal.gadot@cinema.com', '16934567890'),
('Tom', 'Holland', '2005-06-01', 'Rua Super-Heróis, 202', 'tom.holland@cinema.com', '16945678901'),
('Dwayne', 'Johnson', '2000-03-02', 'Avenida Ação, 303', 'dwayne.johnson@cinema.com', '16956789012'),
('Rami', 'Malek', '2004-01-20', 'Rua Ator, 404', 'rami.malek@cinema.com', '16967890123'),
('Ellen', 'DeGeneres', '2005-08-21', 'Rua Humor, 505', 'ellen.degeneres@tv.com', '16978901234'),
('Scarlett', 'Johansson', '2002-02-22', 'Rua Cinema, 606', 'scarlett.johansson@cinema.com', '16989012345'),
('Chris', 'Hemsworth', '2003-11-14', 'Rua Aventura, 707', 'chris.hemsworth@cinema.com', '16990123456');

INSERT INTO Livro (titulo, autor, editora, ano_publicacao, isbn, quant_total, quant_disponivel, valor_aquisicao, status_livro_emprestado) 
VALUES 
('O Código Da Vinci', 'Dan Brown', 'Arqueiro', '2003', '978-0385504201', 15, 15, 80.00, 'Disponível'),
('A Menina que Roubava Livros', 'Markus Zusak', 'Intrínseca', '2005', '978-8580572992', 10, 10, 45.00, 'Disponível'),
('O Silêncio dos Inocentes', 'Thomas Harris', 'Rocco', '1988', '978-8532525601', 5, 5, 75.00, 'Disponível'),
('As Crônicas de Nárnia', 'C.S. Lewis', 'Martins Fontes', '1950', '978-8573021381', 20, 20, 60.00, 'Disponível'),
('A Garota no Trem', 'Paula Hawkins', 'Editora Planeta', '2015', '978-8542210572', 8, 8, 50.00, 'Disponível'),
('O Lobo de Wall Street', 'Jordan Belfort', 'Objetiva', '2008', '978-8573028567', 7, 7, 70.00, 'Disponível'),
('Harry Potter e a Pedra Filosofal', 'J.K. Rowling', 'Rocco', '1997', '978-8532525303', 14, 14, 85.00, 'Disponível'),
('O Homem de Giz', 'John Grisham', 'Record', '2016', '978-8501104451', 9, 9, 40.00, 'Disponível'),
('A Casa dos Espíritos', 'Isabel Allende', 'Bertrand Brasil', '1982', '978-8577348835', 6, 6, 65.00, 'Disponível');
('O Alquimista', 'Paulo Coelho', 'HarperCollins', '1988', '978-0061122415', 10, 10, 35.00, 'Disponível');

INSERT INTO Emprestimo (id_aluno, id_livro, data_emprestimo, data_devolucao, status_emprestimo) 
VALUES 
(11, 14, '2024-09-12', '2024-09-19', 'Em andamento'),
(12, 11, '2024-09-13', '2024-09-20', 'Em andamento'),
(13, 15, '2024-09-14', '2024-09-21', 'Em andamento'),
(14, 12, '2024-09-15', '2024-09-22', 'Em andamento'),
(15, 13, '2024-09-16', '2024-09-23', 'Em andamento'),
(16, 18, '2024-09-17', '2024-09-24', 'Em andamento'),
(17, 19, '2024-09-18', '2024-09-25', 'Em andamento'),
(18, 20, '2024-09-19', '2024-09-26', 'Em andamento'),
(19, 17, '2024-09-20', '2024-09-27', 'Em andamento'),
(20, 16, '2024-09-21', '2024-09-28', 'Em andamento');

SELECT 
    a.ra, 
    a.nome, 
    a.sobrenome, 
    a.celular, 
    l.titulo, 
    l.autor, 
    l.editora, 
    e.data_emprestimo, 
    e.data_devolucao, 
    e.status_emprestimo
FROM 
    Emprestimo e
JOIN 
    Aluno a ON e.id_aluno = a.id_aluno
JOIN 
    Livro l ON e.id_livro = l.id_livro;