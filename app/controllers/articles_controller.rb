class ArticlesController < ApplicationController
  before_action :authenticate_user!, except: [:index, :show]
  def index
    article_type = ::ArticleType.find_by(category: article_params[:category])
    @articles = ::Article.where(article_type_id: article_type).order(:created_at).page(1).per(5)
  end

  def show
    @article = ::Article.find(params[:id])
  end

  def new
    @article = ::Article.new
  end

  def create
    article = ::Article.create! create_params
    redirect_to article
  end

  def edit
    @article = ::Article.find(params[:id])
  end

  def update
    @article = ::Article.find(params[:id])
    @article.update! create_params
    redirect_to @article
  end

  def destroy
  end

  def create_params
    # TODO Get rid of the photo param, test that is ok
    params.require(:article).permit(:title, :content, :photo, :published, :category, :article_type_id)
  end

  def article_params
    params.permit(:category)
  end
end
