class ContactMeController < ApplicationController
  before_action :authenticate_user!, except: [:new, :create]

  def index
    @submissions = ::ContactMe.all
  end
  def new
    @contact_me = ::ContactMe.new
  end

  def create
    # Prevent spam into the database
    return render partial: "/contact_me/failure", locals: { error: "Inbox full." } if ::ContactMe.count >= 15

    contact_me = ::ContactMe.create! create_params
    render partial: "/contact_me/success"
  rescue ::ActiveRecord::RecordInvalid => e
    render partial: "/contact_me/failure", locals: { error: e.record.errors.full_messages.join(". ") }
  end

  def create_params
    params.require(:contact_me).permit(:email, :company, :content)
  end
end
