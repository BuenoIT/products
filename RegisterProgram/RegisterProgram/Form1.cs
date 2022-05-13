namespace RegisterProgram
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void button1_Click(object sender, EventArgs e)
        {
            lblNameShow.Text = "Hello " + txtName.Text + ", your information has been successfully registered  !";
            lblEmailShow.Text = txtEmail.Text;
            lblCityShow.Text = lbCities.Text;

            if (rbtnASP.Checked)
            {
                lblSubjectShow.Text = rbtnASP.Text;
            }
            else if (rbtnCSharp.Checked)
            {
                lblSubjectShow.Text = rbtnCSharp.Text;
            }
            else
            {
                
            }

           foreach(string item in ckdHobbies.CheckedItems)
            {
               lblHobbiesShow.Text += item + " ";
           }
        }

        private void button2_Click(object sender, EventArgs e)
        {
            lblNameShow.Text = " The information you provided was successfully deleted  !";
            lblEmailShow.Text = " ";
            lblCityShow.Text = " ";
            lblSubjectShow.Text = " ";
            lblHobbiesShow.Text = " ";
        }

        private void lbCities_SelectedIndexChanged(object sender, EventArgs e)
        {

        }

        private void label1_Click(object sender, EventArgs e)
        {

        }

        private void label4_Click(object sender, EventArgs e)
        {

        }

        private void Form1_Load(object sender, EventArgs e)
        {

        }
    }
}