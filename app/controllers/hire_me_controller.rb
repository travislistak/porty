class HireMeController < ApplicationController
  before_action :authenticate_user!, except: [:new, :create]

  def index
    @submissions = ::HireMe.all
  end
  def new
    @hire_me = ::HireMe.new
  end

  def create
    # Prevent spam into the database
    return redirect_to "/hire_me/failure" if ::HireMe.count >= 15

    hire_me = ::HireMe.create! create_params
    redirect_to "/hire_me/success"
  end

  def create_params
    params.require(:hire_me).permit(:email, :company, :content)
  end
end
