use stewart;

-- drop table if exists Users;
-- create table Users(
--    ID int auto_increment primary key,
--    Name varchar(30),
--    Password varchar(30)
-- );

-- insert into Users(Name, Password)
-- values ('Stewart', 'P@ssword1'),
--       ('Josh', 'P@ssword1'),
--       ('Dee', 'P@ssword1');

-- drop procedure if exists CheckPassword;
-- delimiter //
-- create procedure CheckPassword (pUser VARCHAR(50), pPassword VARCHAR(50))
-- begin
--    DECLARE vResult int ;
--    select case  
--       when Name = pUser and Password = pPassword then 1
--       when Name = pUser and Password <> pPassword then 0
--    end as Result
--    from Users
--    where pUser = Name
--    into vResult;

--    if ISNULL(vResult) then 
--       set vResult = -1;
--    end if;

--    SELECT vResult as Result;

-- end //
-- delimiter ;

-- drop table if exists Staff;
-- create table Staff(
--    ID int auto_increment primary key,
--    Name varchar(30),
--    Position varchar(30),
--    Phone varchar(10),
--    Email varchar(50)
-- );

-- insert into Staff(Name, Position, Phone, Email) 
--    VALUES ('Stewart', 'Developer', '0123456789', 'stewart@stuffandthings.com'),
--          ('Josh', 'Website Designer', '0123546789', 'josh@stuffandthings.com'),
--          ('Dee', 'Database Administrator', '0213456789', 'dee@stuffandthings.com');

-- drop procedure if exists GetStaff;
-- delimiter //
-- create procedure GetStaff()
-- begin
--    select * from Staff;
-- end //
-- delimiter ;



-- -- create table Event(
-- --    ID int auto_increment primary key,
-- --    PersonID int ,
-- --    Value varchar(255),
-- --    foreign key (PersonID) references Person(ID)
-- -- );

-- -- insert into Person(Name, Password) 
-- -- values ('Todd','P@ssword1'), 
-- --       ('Trent','P@ssword2'),
-- --       ('Tamisin','P@ssword3'),
-- --        ('Trisha','P@ssword4');
-- -- insert into Event(PersonID, Value)
-- -- values (1, 'Todd said this'),
--  --      (2, 'Trent said this');

-- -- drop procedure if exists GetUsers;
-- -- delimiter //
-- -- create procedure GetUsers()
-- -- begin
-- --       select * from Person;
-- -- end //
-- -- delimiter ;

-- -- Test CheckPassword
-- call CheckPassword('Todd','P@ssword1');
-- call CheckPassword('Todd','P@ssword11');
-- call CheckPassword('Toddy','P@ssword11');

-- drop procedure if exists StoreComment;
-- delimiter //
-- create procedure StoreComment (pUser VARCHAR(50), pComment VARCHAR(50))
-- begin
--      insert into Event(PersonID, Value)
--      values ((select ID from Person where name = pUser LIMIT 1), pComment);

--      SELECT 'Stored a commnet' As Result;

-- end //
-- delimiter ;
-- -- Test StoreComment
-- call StoreComment('Todd','Test');
-- call StoreComment('Todd','Test2');
-- call StoreComment('Toddy','Test3');



 

