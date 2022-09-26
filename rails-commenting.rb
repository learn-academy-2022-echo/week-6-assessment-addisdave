# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1)
# A part of rails controller in MVC architecture in Ruby on Rails that coordinates an interaction
#  b/n the user, view and model. In the above example, blog_posts_corntroller.rb is a directory of new rails controller created when we run $ rails g controller blog_post. Inside, we can define a method that allows us to define and render some type of information in our Uniform Resource Locator (url) in HTML, CSS or JS styles.

class BlogPostsController < ApplicationController
  def index
    # ---2)
    # index, a Representational State Transfer (RESTful) controller routes which allows us to create an instance variable called "posts" with "all" the entries that reside inside the table model called BlogPost.

    @posts = BlogPost.all
  end

  # ---3)
  # show, a RESTful controller method in Rails for listing(showing one) particular data entry inside the the table called "BlogPost" using its unique identifier (id) and assignign it to an instance variable "post".

  def show
    @post = BlogPost.find(params[:id])
  end

  # ---4)
  # RESTfull controller method "new" that displays or shapes an HTML for creatign an item to be inserted in to the DB BlogPost by assinging it to an instance variable "post". 

  def new
    @post = BlogPost.new
  end

  def create
    # ---5)
    # "create" RESTfull controller method with conditional statement that adds the value of the new item in to the database BlogPost if true else to a new path.

    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to new_blog_post_path
    end
  end

  def edit
    # ---6)
    #  "edit" A RESTful controller mothod that offers HTML form for a specific data to be updated in the database BlogPost with assigned instance variable and unique id. 
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])

    # ---7)
    # "update" RESTful control method overwrites the value of the existing database in BlogPost if true else redirect back to blog_post_path
 

    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to edit_blog_post_path
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      redirect_to blog_posts_path
    else
      # ---8)
      #  "destroy" Delete specific item if true else redirect. This action will permanently remove an item from ever bieng accessed again. 

      redirect_to blog_post_path(@post)
    end
  end

  # ---9)
  # "private" method that is hidden or not accessable to users. It lets developers to call on only inside the class which it was defined. Since by default all methods are public, anyone can use them by defining private only the developer can make changes to a database.

  private
  def blog_post_params
    # ---10)
    # only title and content are repuired for the parameter blog_post.

    params.require(:blog_post).permit(:title, :content)
  end
end
