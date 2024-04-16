class ProjectsController < ApplicationController
  before_action :authenticate_user!, except: [:index, :show]

  def index
    if current_user
      @projects = ::Project.unscoped.order(:created_at).page(1).per(5)
    else
      @articles = ::Article.order(:created_at).page(1).per(5)
    end
  end

  def show
    if current_user
      @project = ::Project.unscoped.find(params[:id])
    else
      @project = ::Project.find(params[:id])
    end
  end

  def new
    @project = ::Project.new
  end

  def create
    project = ::Project.create! create_params
    redirect_to project
  end

  def edit
    @project = ::Project.find(params[:id])
  end

  def update
    @project = ::Project.unscoped.find(params[:id])
    @project.update! create_params
    redirect_to @project
  end

  def destroy
  end

  def create_params
    params.require(:project).permit(:title, :content, :published, :category, :article_type_id)
  end
end
