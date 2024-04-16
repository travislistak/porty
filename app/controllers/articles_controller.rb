class ArticlesController < ApplicationController
  before_action :authenticate_user!, except: [:index, :show]
  def index
    if current_user
      @articles = ::Article.unscoped.order(:created_at).page(1).per(5)
    else
      @articles = ::Article.order(:created_at).page(1).per(5)
    end
  end

  def show
    if current_user
      @article = ::Article.unscoped.find(params[:id])
    else
      @article = ::Article.find(params[:id])
    end
  end

  def new
    @article = ::Article.new
  end

  def create
    article = ::Article.create! create_params
    redirect_to article
  end

  def edit
    @article = ::Article.unscoped.find(params[:id])
  end

  def update
    @article = ::Article.unscoped.find(params[:id])
    @article.update! create_params
    redirect_to @article
  end

  def destroy
  end

  def create_params
    params.require(:article).permit(:title, :content, :published, :header_image)
  end
end
