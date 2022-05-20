/*
 * Program ID: loanCalculator
 * 
 * Purpose: To calculate a Loan's Monthly Payment, Loan Amount, and the Number of Months through an application using inputs in forms.
 *
 * Program revision:
 *      2022/05/19: Created By Guilherme Bueno
 *
 */

namespace loanCalculator
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            // To provide standard values to labels in the program.
            InitializeComponent();
            cmBoxTypes.Text = "Find the Monthly Payment";
            lbl1.Text = "Loan Amount: $";
            lbl2.Text = "Annual Interest Rate: %";
            lbl3.Text = "Number of Months: ";
            lblAnswerMessage.Text = "";
        }

        private void label1_Click(object sender, EventArgs e)
        {

        }

        private void comboBox1_SelectedIndexChanged(object sender, EventArgs e)
        {

            // To identify box types and give label attributes depending on the user's choice.
            if (cmBoxTypes.Text == "Find the Monthly Payment")
            {

                lbl1.Text = "Loan Amount: $";
                lbl2.Text = "Annual Interest Rate: %";
                lbl3.Text = "Number of Months: ";
            } else if (cmBoxTypes.Text == "Find the Loan Amount")
            {
                lbl1.Text = "Annual Interest Rate: %";
                lbl2.Text = "Number of Months: ";
                lbl3.Text = "Monthly Payment: $";
            } else if (cmBoxTypes.Text == "Find the Number of Months")
            {
                lbl1.Text = "Loan Amount: $";
                lbl2.Text = "Annual Interest Rate: %";
                lbl3.Text = "Monthly Payment: $";
            }
            // Not completed - Work in Progress - "Find the Interest Rate"

            //else if (cmBoxTypes.Text == "Find the Interest Rate")
            //{
            //    lbl1.Text = "Loan Amount: $";
            //    lbl2.Text = "Number of Months: ";
            //    lbl3.Text = "Monthly Payment: $";
            //}
        }

        private void label1_Click_1(object sender, EventArgs e)
        {

        }

        private void lblCalculation_Click(object sender, EventArgs e)
        {

        }

        private void btnCalculate_Click(object sender, EventArgs e)
        {

            // If statement to validar user input on all text boxes
            if (string.IsNullOrEmpty(txtBox1.Text))
            {
                MessageBox.Show("Please input a valid information", "Warning", MessageBoxButtons.OK, MessageBoxIcon.Warning);
                txtBox1.Focus();
            }
            else if (string.IsNullOrEmpty(txtBox2.Text))
            {
                MessageBox.Show("Please input a valid information", "Warning", MessageBoxButtons.OK, MessageBoxIcon.Warning);
                txtBox2.Focus();
            }
            else if (string.IsNullOrEmpty(txtBox3.Text))
            {
                MessageBox.Show("Please input a valid information", "Warning", MessageBoxButtons.OK, MessageBoxIcon.Warning);
                txtBox3.Focus();
            }
            else
            {
                // If statement to calculate depending on user's given information in the program (By clicking the button calculate)


                if (cmBoxTypes.Text == "Find the Monthly Payment") // To calculate the Monthly Payment by using Loan Amount, Interest Rate, and Number of Months
                {
                    
                    double pv = double.Parse(txtBox1.Text);
                    double i = (double.Parse(txtBox2.Text) / 100) / 12;
                    int n = int.Parse(txtBox3.Text);

                    double pmt = (pv * ((i)) / (1 - Math.Pow((1 + i), -n)));

                    MessageBox.Show("The month's payment has been calculated successfully.", "Message", MessageBoxButtons.OK, MessageBoxIcon.Information);

                    lblAnswerMessage.Text = ($"Monthly Payment is equal to $ {pmt.ToString("C")}");
                }
                else if (cmBoxTypes.Text == "Find the Loan Amount") // To calculate the Loan Amount by using Interest Rate, Number of Months, and Monthly Payment
                {
                    
                    double i = (double.Parse(txtBox1.Text) / 100) / 12;
                    double n = int.Parse(txtBox2.Text);
                    double pmt = double.Parse(txtBox3.Text);

                    double interestRate = Math.Pow(1 + i, n);

                    double pv = (pmt / i) * (1 - (1 / interestRate));

                    MessageBox.Show("The loan amount has been calculated successfully.", "Message", MessageBoxButtons.OK, MessageBoxIcon.Information);

                    lblAnswerMessage.Text = ($"Loan Amount is equal to $ {pv.ToString("C")}");
                }
                else if (cmBoxTypes.Text == "Find the Number of Months") // To calculate the Number of Months by using  Loan Amount, Interest Rate, and Monthly Payment
                {
                    
                    double pv = double.Parse(txtBox1.Text);
                    double i = (double.Parse(txtBox2.Text) / 100) / 12;
                    double pmt = double.Parse(txtBox3.Text);

                    double n = Math.Log((pmt / i) / (pmt / i - pv)) / Math.Log(1 + i);

                    if (double.IsNaN(n))
                    {
                        MessageBox.Show("Please try again with different values", "Error", MessageBoxButtons.OK, MessageBoxIcon.Error);
                    }
                    else
                    {
                        MessageBox.Show("The number of months has been calculated successfully.", "Message", MessageBoxButtons.OK, MessageBoxIcon.Information);

                        lblAnswerMessage.Text = ($"Number of months is equal to {Math.Round(n, 0)}");
                    }
                    
                }

                // Not completed - Work in Progress - "Find the Interest Rate"

                //else if (cmBoxTypes.Text == "Find the Interest Rate")
                //{
                //    double pv = double.Parse(txtBox1.Text);
                //    double n = int.Parse(txtBox2.Text);
                //    double pmt = double.Parse(txtBox3.Text);

                //    pv = pmt * Math.Pow((1 + i), n);
                //}
            }

        }

        private void btnClear_Click(object sender, EventArgs e)
        {
            // To clear user informations given in the labels (By clicking the button clear)

            txtBox1.Clear();
            txtBox2.Clear();
            txtBox3.Clear();
            lblAnswerMessage.Text = "";
        }

        private void pictureBox1_Click(object sender, EventArgs e)
        {

        }

        private void pictureBox1_Click_1(object sender, EventArgs e)
        {

        }

        private void txtBox1_TextChanged(object sender, EventArgs e)
        {
            // To validate txtBox1 text changed to letters or numbers. If letters system will alert user to change their input.
            if (System.Text.RegularExpressions.Regex.IsMatch(txtBox1.Text, "^[0-9]"))
            {
                
            }
            else if (string.IsNullOrEmpty(txtBox1.Text))
            {

            }
            else
            {
                MessageBox.Show("Please, only enter number values", "Warning", MessageBoxButtons.OK, MessageBoxIcon.Warning);
                txtBox1.Focus();
            }
        }

        private void txtBox1_Validating(object sender, System.ComponentModel.CancelEventArgs e)
        {
     
        }

        private void txtBox2_TextChanged(object sender, EventArgs e)
        {
            // To validate txtBox2 text changed to letters or numbers. If letters system will alert user to change their input.
            if (System.Text.RegularExpressions.Regex.IsMatch(txtBox2.Text, "^[0-9]"))
            {

            }
            else if (string.IsNullOrEmpty(txtBox2.Text))
            {

            }
            else
            {
                MessageBox.Show("Please, only enter number values", "Warning", MessageBoxButtons.OK, MessageBoxIcon.Warning);
                txtBox2.Focus();
            }
        }

        private void txtBox3_TextChanged(object sender, EventArgs e)
        {
            // To validate txtBox3 text changed to letters or numbers. If letters system will alert user to change their input.
            if (System.Text.RegularExpressions.Regex.IsMatch(txtBox3.Text, "^[0-9]"))
            {

            }
            else if (string.IsNullOrEmpty(txtBox3.Text))
            {

            }
            else
            {
                MessageBox.Show("Please, only enter number values", "Warning", MessageBoxButtons.OK, MessageBoxIcon.Warning);
                txtBox3.Focus();
            }
        }

        private void label1_Click_2(object sender, EventArgs e)
        {

        }

        private void Form1_Load(object sender, EventArgs e)
        {

        }
    }
}