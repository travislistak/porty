class HireMeController < ApplicationController
  before_action :authenticate_user!, except: [:new, :create]

  def new
    @hireme = HireMe.new
  end

  def create
    project = ::Project.create! create_params
    redirect_to project
  end

  def edit
    @project = ::Project.unscoped.find(params[:id])
  end

  def update
    @project = ::Project.unscoped.find(params[:id])
    @project.update! create_params
    redirect_to @project
  end

  def destroy
  end

  def create_params
    params.require(:project).permit(:title, :content, :published, :header_image, :link)
  end
end
