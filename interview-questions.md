# ASSESSMENT 6: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort that has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

Your answer: If rails db:migrate is not initiated, I will delete the model using RESTful control destroy by defining the method in cohorts_controllrer.rb. Then, I will create another model again with forein_key which reference a primary key of another table. If already migrated, I will copy the database and start new. The name of foriegn key is cohort_id:integer and it is on the student's model.

Researched answer: If already migrated, I couldn't figure this out but, the best answer I got is from the syllybus. In active record migraion we can edit the database by running a Rails generate command to create a migration with proper naming conventons that communicate the intent of the changes we are making. Simply follow this format $rails generate migration add_item_to_list. In our case type this command in terminal $rails generate migration add_forien_key_to_student. This will create a new version of the database and update the schema file accordingly. Then editing the file and adding the changes we want with in the "def change" method in migrate folder. It should show something like this. Note sure tho.The migration class in active record has methods which does CRUD operations.

class CreateCohorts < ActiveRecord::Migration
  def change
    create_table : Cohort do |t|
      t.string :students
      t.timestamps
    end
  end
end

2. Which RESTful routes must always be passed params? Why?

Your answer: You can use as many parameters as you want. Therefore, any of the seven RESTful routes can use parameters. 

Researched answer: They all use params.

3. Name three rails generator commands. What is created by each?

Your answer: rails g controller, rails g model, rails g resoursce

Researched answer: rails g controller creates all files associated with a paticular controller that coordinates interaction b/n the user, the view and model.

$rails g controller creates files through generate coomand that let us make changes to a database.

$rails g model is directly tied to database generate new model which let us add database records. 

$rails g resource command will a model that has its columns and data types a controller with its view folder and all the required RESTful routes. 

4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?


action: "GET" location: /students

"index" controller. It list all sudents in database.

action: "POST" location: /students

"create" controller. It addd the value of students in to a database.

action: "GET" location: /students/new

"new" controller. It returns an HTML FORM for a new student to be inserted in to the database.

action: "GET" location: /students/2

"show" controller. It gives us a return of a specific studentnt2 from the database.

action: "GET" location: /students/2/edit

"edit" controller. It returns an HTML FORM for updating a student 2 in the database.

action: "PATCH" location: /students/2

"update" controller. It allows us to overwrite the value of an existing student 2.

action: "DELETE" location: /students/2

"destroy" controller. It removes (not accessable anymore) the database student2 permanently. 


5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).

??????

Prioritize, scalable tasks, update, change, feedback, enabling collaberations, delete tasks, strategy or goal setting, discussion forum on projects, appointment tied to time and date. 