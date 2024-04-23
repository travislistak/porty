class OfflinesController < ApplicationController
  before_action :authenticate_user!, except: [:index, :show]
  def index
    if current_user
      @offlines = ::Offline.unscope(where: :published).page(1).per(5)
    else
      @offlines = ::Offline.page(1).per(5)
    end
  end

  def show
    if current_user
      @offline = ::Offline.unscoped.find(params[:id])
    else
      @offline = ::Offline.find(params[:id])
    end
  end

  def new
    @offline = ::Offline.new
  end

  def create
    offline = ::Offline.create! create_params
    redirect_to offline
  end

  def edit
    @offline = ::Offline.unscoped.find(params[:id])
  end

  def update
    @offline = ::Offline.unscoped.find(params[:id])
    @offline.update! create_params
    redirect_to @offline
  end

  def destroy
  end

  def create_params
    params.require(:offline).permit(:title, :content, :published, :header_image)
  end
end
